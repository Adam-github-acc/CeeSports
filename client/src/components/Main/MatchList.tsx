import { Props } from "../../types";
import Match from "../Match/Match";
import League from "../League/League";
import { readByDate, create, readApiByDate } from "../../utils";
import { useEffect, useState } from "react";
import { database } from '../db'

const MatchList: React.FC<any> = ({date}) => {
  let result:Props[];
  const [matches, setMatches] = useState<Props[]>();
  const [leagueIds, setLeagueIds] = useState <number[]>();
  const newArr:number[] = [];
  function logger2() {
    const leagueIdSet = new Set<number>();
    if(matches) result = matches.sort((a:Props, b:Props) => a.leagueId - b.leagueId)
    for(let i = 0; i < result.length; i++) {
      leagueIdSet.add(result[i].leagueId);
    }
    const leagueIdArray:number[] = Array.from(leagueIdSet);
    setMatches(result);
    setLeagueIds(leagueIdArray);
    if(matches) {
      console.log('send')
      create(matches);
    }
  }
  const fixtureDate:string = database.parameters.date;
  result = database.response.map(res => {
    return {
      date: fixtureDate,
      time: res.fixture.date,
      matchId: res.fixture.id,
      referee: res.fixture.referee,
      stadium: res.fixture.venue.name,
      city: res.fixture.venue.city,
      league: res.league.name,
      leagueId: res.league.id,
      leagueLogo: res.league.logo,
      country: res.league.country,
      hometeam: res.teams.home.name,
      hometeamLogo: res.teams.home.logo,
      awayteam: res.teams.away.name,
      awayteamLogo: res.teams.away.logo,
    }
  });
  function logger() {
    console.log(matches);
  }
  useEffect(() => {
    /* handleMatches()
    const leagueIdSet = new Set<number>();
    if(matches) result = matches.sort((a:Props, b:Props) => a.leagueId - b.leagueId)
    for(let i = 0; i < result.length; i++) {
      leagueIdSet.add(result[i].leagueId);
    }
    const leagueIdArray:number[] = Array.from(leagueIdSet);
    setMatches(result);
    setLeagueIds(leagueIdArray); */
  }, [date])
  async function handleMatches() {
    const response = await readByDate(date);
    console.log(response);
    if(response.succes) setMatches(response);
    else {
      console.log('calling api')
      const api = await readApiByDate(date)
        .catch(console.error);
      console.log(api)
      const fixtureDate:string = api.parameters.date;
      const result:Props[] = api.response.map((res: { fixture: { date: any; id: any; referee: any; venue: { name: any; city: any; }; }; league: { name: any; id: any; logo: any; country: any; }; teams: { home: { name: any; logo: any; }; away: { name: any; logo: any; }; }; }) => {
        return {
          date: fixtureDate,
          time: res.fixture.date,
          matchId: res.fixture.id,
          referee: res.fixture.referee,
          stadium: res.fixture.venue.name,
          city: res.fixture.venue.city,
          league: res.league.name,
          leagueId: res.league.id,
          leagueLogo: res.league.logo,
          country: res.league.country,
          hometeam: res.teams.home.name,
          hometeamLogo: res.teams.home.logo,
          awayteam: res.teams.away.name,
          awayteamLogo: res.teams.away.logo,
        }
      })
      setMatches(result);
      create(result);
    }
  }
  //using filter to chose specific league
  return (
    <div className="match-list">
      <div onClick={logger2}>Hello1</div>
      <div onClick={logger}>Hello2</div>
      <div>{leagueIds && leagueIds.map((id:number) => (
          <div key={id}>
            <div>{matches && matches.map((item:Props) => (
              id === item.leagueId && !newArr.find(a => a === id) && newArr.push(id) && <League item={item} />
            ))}</div>
            <div>{matches && matches.map((item:Props) => (
              id === item.leagueId && <Match item={item} key={item.matchId} />
            ))}</div>
          </div>
        ))}</div>
    </div>
  );
}

export default MatchList;
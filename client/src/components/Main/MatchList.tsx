import { Props } from "../../types";
import Match from "../Match/Match";
import League from "../League/League";
import { readByDate, create, readApiByDate } from "../../utils";
import { useEffect, useState } from "react";

const MatchList: React.FC<any> = ({date, sport}) => {
  const [matches, setMatches] = useState<Props[] | false>(false);
  const [leagueIds, setLeagueIds] = useState <number[]>();
  const newArr:number[] = [];
  let res:Props[];
  async function logger2() {
    const response:{success:string, data:Props[]} = await readByDate('2021-04-08')
    setMatches(response.data)
    const leagueIdSet = new Set<number>();
    if(matches) res = matches.sort((a:Props, b:Props) => a.leagueId - b.leagueId)
    for(let i = 0; i < res.length; i++) {
      leagueIdSet.add(res[i].leagueId);
    }
    const leagueIdArray:number[] = Array.from(leagueIdSet);
    setMatches(res);
    setLeagueIds(leagueIdArray);
    if(matches) {
      console.log(matches)
      //await create(matches);
    }
  }
  async function logger() {
    console.log(matches)
    console.log(leagueIds)
  }
  useEffect(() => {
    handleMatches()
  }, [date])
  async function handleMatches() {
    let url:string = '';
    let res:Props[] = [];
    const response:{success:string, data:Props[]} = await readByDate(date);
    setMatches(response.data)
    const leagueIdSet = new Set<number>();
    if(matches) res = response.data.sort((a:Props, b:Props) => a.leagueId - b.leagueId)
    if(res.length) {
      for(let i = 0; i < res.length; i++) {
        console.log(res[i].leagueId)
        leagueIdSet.add(res[i].leagueId);
      }
      const leagueIdArray:number[] = Array.from(leagueIdSet);
      setLeagueIds(leagueIdArray);
      console.log(leagueIdArray);
    } else setLeagueIds([]);
    setMatches(res);
    console.log(response.data);
    if(response.data[0]) setMatches(response.data);
    else {
      console.log('calling api')
      /* switch(sport) {
        case 'footboll':
          console.log('sport')
          url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${date}`
          break
      }
      const api = await readApiByDate(url)
        .catch(console.error);
      console.log(api)
      const fixtureDate:string = api.parameters.date;
      const result:Props[] = api.response.map((res: { fixture: { date: any; id: any; referee: any; venue: { name: any; city: any; }; }; league: { name: any; id: any; logo: any; country: any; }; teams: { home: { name: any; logo: any; }; away: { name: any; logo: any; }; }; }) => {
        return {
          sport: sport,
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
      }) */
      /* setMatches(result);
      create(result); */
    }
  }
  //using filter to chose specific league
  return (
    <div className="match-list">
      <div>Sport: {sport}</div>
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
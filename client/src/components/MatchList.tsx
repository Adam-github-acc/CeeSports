import { Props } from "../types";
import Match from "./Match";
import { readByDate, create, readApiByDate } from "../utils";
import { useState, useEffect } from "react";
import { isPropertySignature } from "typescript";
import { database } from './db'

const MatchList: React.FC = () => {
  const [matches, setMatches] = useState<Props[]>();
  const [leagueIds, setLeagueIds] = useState <number[]>();
  function logger2() {
    const leagueIdSet = new Set<number>();
    result = result.sort((a:Props, b:Props) => a.leagueId - b.leagueId)
    for(let i = 0; i < result.length; i++) {
      leagueIdSet.add(result[i].leagueId);
    }
    const leagueIdArray:number[] = Array.from(leagueIdSet);
    setMatches(result);
    setLeagueIds(leagueIdArray);
  }
  function logger() {
    console.log(matches);
  }
  const fixtureDate:string = database.parameters.date;
  let result:Props[] = database.response.map(res => {
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
  async function handleMatches(date:Date) {
    const response = await readByDate(date);
    if(response) setMatches(response);
    else {
      /* const api = await readApiByDate(date)
        .catch(console.error); */
      const fixtureDate:string = database.parameters.date;
      const result:Props[] = database.response.map(res => {
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
    }
  }

  return (
    <div>
      <div onClick={logger2}>Hello1</div>
      <div onClick={logger}>Hello2</div>
      <div>{leagueIds && leagueIds.map((id:number) => (
          <div key={id}>
            <div>{id}</div>
            <div>{matches && matches.map((item:Props) => (
              id === item.leagueId && <Match item={item} key={item.matchId} />
            ))}</div>
          </div>
        ))}</div>
    </div>
  );
}

export default MatchList;
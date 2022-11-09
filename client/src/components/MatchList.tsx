import { Props } from "../types";
import Match from "./Match";
import { readByDate, create, readApiByDate } from "../utils";
import { useState, useEffect } from "react";
import { isPropertySignature } from "typescript";
import { database } from './db'

const MatchList: React.FC = () => {
  const [matches, setMatches] = useState<[Props] | any>();
  function logger2() {
    setMatches(result)
  }
  function logger() {
    console.log(matches)
  }
  const fixtureDate:string = database.parameters.date;
      const result = database.response.map(res => {
        return {
          date: fixtureDate,
          time: res.fixture.timestamp,
          matchId: res.fixture.id,
          referee: res.fixture.referee,
          stadium: res.fixture.venue.name,
          city: res.fixture.venue.city,
          league: res.league.name,
          leagueLogo: res.league.logo,
          country: res.league.country,
          hometeam: res.teams.home.name,
          hometeamLogo: res.teams.home.logo,
          awayteam: res.teams.away.name,
          awayteamLogo: res.teams.away.logo,
        }
      })
  async function handleMatches(date:Date) {
    const response = await readByDate(date);
    if(response) setMatches(response);
    else {
      /* const api = await readApiByDate(date)
        .catch(console.error); */
      const fixtureDate:string = database.parameters.date;
      const result = database.response.map(res => {
        return {
          date: fixtureDate,
          time: res.fixture.timestamp,
          matchId: res.fixture.id,
          referee: res.fixture.referee,
          stadium: res.fixture.venue.name,
          city: res.fixture.venue.city,
          league: res.league.name,
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
      {matches && matches.map((item:Props) => (
          <Match item={item} key={item.matchId} />
        ))}
    </div>
  );
}

export default MatchList;
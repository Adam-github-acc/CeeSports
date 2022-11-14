import { Props } from "../../types";
import Match from "../Match/Match";
import League from "../League/League";
import { readByDate, create, readApiByDate } from "../../utils";
import { useEffect, useState } from "react";

const MatchList: React.FC<any> = ({date, sport}) => {
  const [matches, setMatches] = useState<Props[] | false>(false);
  const [leagueIds, setLeagueIds] = useState <number[]>();
  const newArr:number[] = [];
  /* const sportURL:{'football':string} = {
    'football': `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${date}`
  } */
  useEffect(() => {
     handleMatches()
  }, [date])
  async function handleMatches() {
    let url = '';
    const response:{success:string, data:Props[]} = await readByDate(sport, date);
    setMatches(response.data)
    if(response.data) var res:Props[] = response.data.sort((a:Props, b:Props) => a.leagueId - b.leagueId)
    setLeagueIds(createLeagueIdArray(res));
    setMatches(res);
    if(response.data[0]) setMatches(response.data);
    else {
      switch(sport) {
        case 'football':
        url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${date}`
        break
        case 'basketball':
        url = `https://api-nba-v1.p.rapidapi.com/games?date=${date}`
        break
        case 'handball':
        url = `https://api-handball.p.rapidapi.com/games?date=${date}`
        break
        /* case 'basketball':
        url = `https://api-nba-v1.p.rapidapi.com/games?date=${date}`
        break
        case 'basketball':
        url = `https://api-nba-v1.p.rapidapi.com/games?date=${date}`
        break
        case 'basketball':
        url = `https://api-nba-v1.p.rapidapi.com/games?date=${date}`
        break */
      }
      const api = await readApiByDate(sport, url)
          .catch(console.error);
      if(sport === 'football') {
        const result:Props[] = api.response.map((res: { fixture: { date: any; id: any; referee: any; venue: { name: any; city: any; }; }; league: { name: any; id: any; logo: any; country: any; }; teams: { home: { name: any; logo: any; }; away: { name: any; logo: any; }; }; }) => {
          return {
            sport: sport,
            date: date,
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
        updateMatchList(result);
      } else if (sport === 'basketball'){
        const result:Props[] = api.response.map((res:any) => {
          return {
            sport: sport,
            date: date,
            time: res.date.start,
            matchId: res.id,
            referee: res.officials.join(' '),
            stadium: res.arena.name,
            city: res.arena.city,
            league: 'NBA',
            leagueId: 1,
            leagueLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/800px-National_Basketball_Association_logo.svg.png',
            country: res.arena.country,
            hometeam: res.teams.home.name,
            hometeamLogo: res.teams.home.logo,
            awayteam: res.teams.visitors.name,
            awayteamLogo: res.teams.visitors.logo,
          }
        })
        updateMatchList(result);
      } else if (sport === 'handball'){
        const result:Props[] = api.response.map((res:any) => {
          return {
            sport: sport,
            date: date,
            time: res.date,
            matchId: res.id,
            referee: null,
            stadium: null,
            city: null,
            league: res.league.name,
            leagueId: res.league.id,
            leagueLogo: res.league.logo,
            country: res.country.name,
            hometeam: res.teams.home.name,
            hometeamLogo: res.teams.home.logo,
            awayteam: res.teams.away.name,
            awayteamLogo: res.teams.away.logo,
          }
        })
        updateMatchList(result);
      } /* else if (sport === 'basketball'){
        const result:Props[] = api.response.map((res:any) => {
          return {
            sport: sport,
            date: date,
            time: res.date.start,
            matchId: res.id,
            referee: res.officials.join(' '),
            stadium: res.arena.name,
            city: res.arena.city,
            league: 'NBA',
            leagueId: 1,
            leagueLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/800px-National_Basketball_Association_logo.svg.png',
            country: res.arena.country,
            hometeam: res.teams.home.name,
            hometeamLogo: res.teams.home.logo,
            awayteam: res.teams.visitors.name,
            awayteamLogo: res.teams.visitors.logo,
          }
        })
        updateMatchList(result);
      } else if (sport === 'basketball'){
        const result:Props[] = api.response.map((res:any) => {
          return {
            sport: sport,
            date: date,
            time: res.date.start,
            matchId: res.id,
            referee: res.officials.join(' '),
            stadium: res.arena.name,
            city: res.arena.city,
            league: 'NBA',
            leagueId: 1,
            leagueLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/800px-National_Basketball_Association_logo.svg.png',
            country: res.arena.country,
            hometeam: res.teams.home.name,
            hometeamLogo: res.teams.home.logo,
            awayteam: res.teams.visitors.name,
            awayteamLogo: res.teams.visitors.logo,
          }
        })
        updateMatchList(result);
      } else if (sport === 'basketball'){
        const result:Props[] = api.response.map((res:any) => {
          return {
            sport: sport,
            date: date,
            time: res.date.start,
            matchId: res.id,
            referee: res.officials.join(' '),
            stadium: res.arena.name,
            city: res.arena.city,
            league: 'NBA',
            leagueId: 1,
            leagueLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/800px-National_Basketball_Association_logo.svg.png',
            country: res.arena.country,
            hometeam: res.teams.home.name,
            hometeamLogo: res.teams.home.logo,
            awayteam: res.teams.visitors.name,
            awayteamLogo: res.teams.visitors.logo,
          }
        })
        updateMatchList(result);
      } */
    }
  }
  const createLeagueIdArray = (res:Props[]):number[] => {
    const leagueIdSet = new Set<number>();
    for(let i = 0; i < res.length; i++) {
      leagueIdSet.add(res[i].leagueId);
    }
    return Array.from(leagueIdSet);
  }
  const updateMatchList = (res:Props[]):void => {
    setLeagueIds(createLeagueIdArray(res));
    setMatches(res);
    create(res);
  }
  //using filter to chose specific league
  return (
    <div className="match-list">
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
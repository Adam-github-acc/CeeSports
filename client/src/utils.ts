import { Props } from "./types"

const url = 'http://localhost:3000/api/events/'

const football = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '258d912fcbmsh6a94172ae233657p1c15e1jsnb90aeed80941',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};
const basketball = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '258d912fcbmsh6a94172ae233657p1c15e1jsnb90aeed80941',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

export const create = async (data:Props[]) => {
  fetch(`${url}`, {
    method: 'POST',
    headers: {'Content-type' : 'application/json'},
    body: JSON.stringify(data),
  })
  .then(result => result.json())
  .catch((error) => console.log(error))
}

export const readByDate = async (sport:string, date:string) => {
  const event = await fetch(`${url}${sport}/${date}`);
  console.log(date)
  const json = await event.json();
  return json;
}

export const readApiByDate = async (sport:string, url:string) => {
  switch(sport) {
    case 'basketball':
    var options = basketball;
    break
    case 'football':
    var options = football;
    break
  }
  const response = await fetch(url, options)
  const json = await response.json();
  return json;
}

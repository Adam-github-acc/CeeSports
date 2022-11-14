import { Props } from "./types"

const url = 'http://localhost:3000/api/events/'

const football = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};
const basketball = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};
const handball = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'api-handball.p.rapidapi.com'
	}
};
const rugby = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'api-rugby.p.rapidapi.com'
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
  let options
  switch(sport) {
    case 'basketball':
    options = basketball;
    break
    case 'football':
    options = football;
    break
    case 'handball':
    options = handball;
    break
    case 'rugby':
    options = rugby;
    break
    /* case 'hockey':
    options = hockey;
    break
    case 'baseball':
    options = baseball;
    break */
  }
  const response = await fetch(url, options)
  const json = await response.json();
  return json;
}

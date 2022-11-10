import { Props } from "./types"

const url = 'http://127.0.0.1:3000/api/events/'

const options:any = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '258d912fcbmsh6a94172ae233657p1c15e1jsnb90aeed80941',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
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

export const readByDate = async (date:string) => {
  const event = await fetch(`${url}${date}`);
  const json = await event.json();
  return json;
}

export const readApiByDate = async (date:string) => {
  console.log(options)
  const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${date}`, options)
  const json = await response.json();
  return json;
}

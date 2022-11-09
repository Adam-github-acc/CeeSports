import { Props } from "./types"

const url = 'http://127.0.0.1:3000/api/events/'

const options:any = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.APIKEY,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

export const create = async (date:Date) => {
  fetch(`${url}${date}`, {
    method: 'POST',
    headers: {'Content-type' : 'application/json'},
    body: JSON.stringify(date),
  })
  .then(result => result.json())
  .catch((error) => console.log(error))
}

export const readByDate = async (date:Date) => {
  const event = await fetch(`${url}${date}`);
  const json:Props = await event.json();
  return json;
}

export const readApiByDate = (date:Date) => {
  fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${date}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
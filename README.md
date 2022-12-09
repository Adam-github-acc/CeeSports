# CeeSports

## Why CeeSports?
CeeSports is an app built too get the upcoming fixtures of multiple sports in one place.
This project was built to mainly develop my skills in interacting with multiple api's and parsing that info for the client.

## To run the app
```bash
cd server
```
```bash
npm run docker:compose
```
## Environment variables
### Server folder env
DATABASE_URL: Deafault: postgres://postgres:postgres@postgres:5432/events
PORT: Default: 4000

### Client folder env
REACT_APP_API_KEY: Your Rapid Api key
#### Needed subscriptions
- https://rapidapi.com/api-sports/api/api-nba/
- https://rapidapi.com/api-sports/api/api-football/
- https://rapidapi.com/api-sports/api/api-rugby/
- https://rapidapi.com/api-sports/api/api-baseball/
- https://rapidapi.com/api-sports/api/api-hockey/
- https://rapidapi.com/api-sports/api/api-handball/

import express, { Application, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';
import cors from 'cors'

const app: Application = express();
const prisma = new PrismaClient();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT: number | string = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(`Server is running on port: ${PORT} home`);
});

app.get("/api/events", async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany();
    return res.json({
        success: true,
        data: events
    });
} catch (error) {
    return res.json({
        success: false,
        message: error
    });
}
});

app.get('/api/events/:date', async (req: Request, res: Response) => {
  try {
      const eventsByDate = await prisma.event.findMany({
        where:{
          date: req.params['date']
        }
      });
      return res.json({
          success: true,
          data: eventsByDate
      });
  } catch (error) {
      return res.json({
          success: false,
          message: error
      });
  }
});

app.post('/api/events', async (req: Request, res: Response) => {
  try {
      const { date, time, matchId, referee, stadium,
        city, league, leagueId, leagueLogo, country,
        hometeam, hometeamLogo, awayteam, awayteamLogo } = req.body;
      const newEvent = await prisma.event.create({
          data: {
            date,
            time,
            matchId,
            referee,
            stadium,
            city,
            league,
            leagueId,
            leagueLogo,
            country,
            hometeam,
            hometeamLogo,
            awayteam,
            awayteamLogo,
          }
      });
      return res.json({
          success: true,
          data: newEvent
      });
  } catch (error) {
      return res.json({
          success: false,
          message: error
      });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
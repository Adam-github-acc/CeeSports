import express, { Application, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';

const app: Application = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT: number | string = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(`Server is running on port: ${PORT}`);
});

app.post('/api/events', async (req: Request, res: Response) => {
  try {
      const { date, matchId, referee, stadium, city,
         league, leagueLogo, country, countryLogo,
          hometeam, hometeamLogo, awayteam, awayteamLogo } = req.body;
      const newEvent = await prisma.event.create({
          data: {
            date,
            matchId,
            referee,
            stadium,
            city,
            league,
            leagueLogo,
            country,
            countryLogo,
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
import express, { Application, Request, Response } from 'express'


const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT: number | string = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(`Server is running on port: ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
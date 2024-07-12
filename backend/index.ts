import express, { Express, Request, Response } from "express";
const port = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello from express. Are you listening to me?`);
});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});

import express, { Application, Request, Response, NextFunction } from 'express';

const app:Application = express();
const PORT = process.env.PORT || 5001;

app.get('/', (req: Request, res: Response) => {
  res.send("Hello TS!")
})





app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

})
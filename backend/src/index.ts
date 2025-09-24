import "dotenv/config";
import express, { Request, Response } from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

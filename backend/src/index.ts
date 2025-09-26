import "dotenv/config";
import express, { Request, Response } from "express";
import { prisma } from "../src/config/database.js";

import instructorRoute from "./modules/user/route";

const PORT = process.env.PORT || 3000;
const app = express();
await prisma.$connect();

app.use(express.json());

app.use("/user", instructorRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

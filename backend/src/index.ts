import "dotenv/config";
import express, { Request, Response } from "express";
import { prisma } from "../src/config/database.js";
import userRoute from "./modules/user/route";
import courseRoute from "./modules/course/route";
import authRoute from "./modules/auth/route";
import orderRoute from "./modules/order/route";

const PORT = process.env.PORT || 3000;
const app = express();
await prisma.$connect();

app.use(express.json());

app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/course", courseRoute);
app.use("/order", orderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

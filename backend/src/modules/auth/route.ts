import { Router } from "express";
import { login, logout, register, getTokenacces } from "./controller";

const router = Router();
router.route("/").get(login).post(register);
router.get("/logout", logout);
router.get("/me", getTokenacces);

export default router;

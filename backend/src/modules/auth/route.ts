import { Router } from "express";
import { login, logout, register } from "./controller";
import {
  userValidationRules,
  loginRules,
} from "../../middleware/validationRules";
import { validation } from "../../middleware/validteData";

const router = Router();
router.get("/", loginRules, validation, login);
router.post("/", userValidationRules, validation, register);
router.get("/logout", logout);
// router.get("/me", rememberMe);

export default router;

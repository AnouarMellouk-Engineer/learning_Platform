import { Router } from "express";
import {
  getAllInstructors,
  createInstructor,
  getAllCreators,
  deleteInstructor,
  login,
  register,
  logout,
} from "./controller";

const router = Router();

router.route("/instructor").get(getAllInstructors).post(createInstructor);
router.delete("/:id", deleteInstructor);
router.route("/creator").get(getAllCreators);

router.route("/").get(login).post(register);
router.get("/logout", logout);

export default router;

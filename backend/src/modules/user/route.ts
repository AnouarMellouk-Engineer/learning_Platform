import { Router } from "express";
import {
  getAllInstructors,
  createInstructor,
  getAllCreators,
  deleteInstructor,
  addcomment,
  getUserCourses,
} from "./controller";

const router = Router();

router.route("/instructor").get(getAllInstructors).post(createInstructor);
router.delete("/instructor/:id", deleteInstructor);
router.route("/creator").get(getAllCreators);
router.get("/courses/:id", getUserCourses);

router.post("/comment", addcomment);

export default router;

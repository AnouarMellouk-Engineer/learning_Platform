import { Router } from "express";
import {
  getAllInstructors,
  createInstructor,
  getAllCreators,
  deleteInstructor,
  addcomment,
} from "./controller";

const router = Router();

router.route("/instructor").get(getAllInstructors).post(createInstructor);
router.delete("/:id", deleteInstructor);
router.route("/creator").get(getAllCreators);

router.post("/comment", addcomment);

export default router;

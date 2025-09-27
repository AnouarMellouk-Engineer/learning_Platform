import { Router } from "express";
import {
  getAllInstructors,
  createInstructor,
  getAllCreators,
  deleteInstructor,
} from "./controller";

const router = Router();

router.route("/instructor").get(getAllInstructors).post(createInstructor);
router.delete("/:id", deleteInstructor);
router.route("/creator").get(getAllCreators);

export default router;

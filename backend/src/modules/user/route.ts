import { Router } from "express";
import {
  getAllInstructors,
  createInstructor,
  getAllCreators,
} from "./controller";

const router = Router();

router.route("/instructor").get(getAllInstructors).post(createInstructor);
router.route("/creator").get(getAllCreators);

export default router;

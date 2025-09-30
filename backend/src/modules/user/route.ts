import { Router } from "express";
import { validation } from "../../middleware/validteData";
import {
  getAllInstructors,
  createInstructor,
  getAllCreators,
  deleteInstructor,
  addcomment,
  getUserCourses,
} from "./controller";
import {
  userValidationRules,
  detailsValidationRules,
} from "../../middleware/validationRules";

const router = Router();

router.get("/instructor", getAllInstructors);
router.post(
  "/instructor",
  userValidationRules,
  detailsValidationRules,
  validation,
  createInstructor
);
router.delete("/instructor/:id", deleteInstructor);
router.route("/creator").get(getAllCreators);

router.get("/courses/:id", getUserCourses);
router.post("/comment", addcomment);

export default router;

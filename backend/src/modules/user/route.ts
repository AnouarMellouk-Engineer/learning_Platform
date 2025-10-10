import { Router } from "express";
import { validation } from "../../middleware/validteData";
import {
  getAllInstructors,
  getAllUsers,
  createInstructor,
  getAllCreators,
  deleteInstructor,
  addcomment,
  getUserCourses,
  getAllComments,
} from "./controller";
import {
  userValidationRules,
  detailsValidationRules,
} from "../../middleware/validationRules";

const router = Router();

router.get("/", getAllUsers);

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
router.get("/comment", getAllComments);

export default router;

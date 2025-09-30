import { Router } from "express";
import { courseValidationRules } from "../../middleware/validationCourse";
import { validation } from "../../middleware/validteData";
import {
  getAllCourses,
  addCourse,
  getCourseDetails,
  updateCourse,
  deleteCourse,
  getcomments,
} from "./controller";

const router = Router();

router.get("/", getAllCourses);
router.post("/", courseValidationRules, validation, addCourse);
router.route("/:id").get(getCourseDetails).delete(deleteCourse);

router.put("/:id", courseValidationRules, validation, updateCourse);

router.get("/comments/:courseId", getcomments);
export default router;

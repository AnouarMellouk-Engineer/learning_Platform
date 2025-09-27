import { Router } from "express";
import {
  getAllCourses,
  addCourse,
  getCourseDetails,
  updateCourse,
  deleteCourse,
  getcomments,
} from "./controller";

const router = Router();

router.route("/").get(getAllCourses).post(addCourse);
router
  .route("/:id")
  .get(getCourseDetails)
  .put(updateCourse)
  .delete(deleteCourse);

router.get("/comments/:commentId", getcomments);
export default router;

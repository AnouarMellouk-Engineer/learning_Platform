import { Router } from "express";
import {
  addOrder,
  getOrders,
  updateOrder,
  exitingOrder,
  deleteOrder,
  getForms,
  addForm,
  findForm,
  updateForm,
  deleteForm,
} from "./controller";

const router = Router();

router.route("/").get(getOrders).post(addOrder);
router.route("/:id").get(exitingOrder).put(updateOrder).delete(deleteOrder);
router.route("/form").get(getForms).post(addForm);
router.route("/form/:id").get(findForm).put(updateForm).delete(deleteForm);

export default router;

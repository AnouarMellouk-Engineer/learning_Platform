import { Router } from "express";
import {
  addOrder,
  getOrders,
  updateOrder,
  getForms,
  addForm,
} from "./controller";

const router = Router();

router.route("/").get(getOrders).post(addOrder).put(updateOrder);
router.route("/form").get(getForms).post(addForm);

export default router;

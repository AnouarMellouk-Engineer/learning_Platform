import { Router } from "express";
import { addOrder, getOrders, updateOrder } from "./controller";

const router = Router();

router.route("/").get(getOrders).post(addOrder).put(updateOrder);

export default router;

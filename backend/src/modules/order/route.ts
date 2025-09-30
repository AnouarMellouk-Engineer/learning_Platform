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
import {
  orderFormValidationRules,
  orderVAlidationRules,
} from "../../middleware/validationForm";
import { validation } from "../../middleware/validteData";

const router = Router();

router.get("/", getOrders);
router.post("/", orderVAlidationRules, validation, addOrder);
router.route("/:id").get(exitingOrder).put(updateOrder).delete(deleteOrder);
router.route("/form").get(getForms);
router.post("/form", orderFormValidationRules, validation, addForm);
router.route("/form/:id").get(findForm).put(updateForm).delete(deleteForm);

export default router;

import { Router } from "express";
import { permission } from "../../middlewares/permissions.js";
import authentication from "../../middlewares/Authentication.js";
import planningUnitMeasureRouter from "./planningUnitMeasure.router.js";
import planningTypeRespRouter from "./planningTypeResp.router.js";
import planningRespRouter from "./planningResp.router.js";

const registerRouter = Router();

registerRouter.use("/plan_unit_measure",
  // authentication.required,
  permission(["create_unit_measure", "update_unit_measure", "get_unit_measure", "delete_unit_measure"]), planningUnitMeasureRouter);

registerRouter.use("/plan_type_resp",
  // authentication.required,
  permission(["create_plan_type_resp", "update_plan_type_resp", "get_plan_type_resp", "delete_plan_type_resp"]), planningTypeRespRouter);

registerRouter.use("/plan_resp",
  // authentication.required,
  permission(["create_plan_resp", "update_plan_resp", "get_plan_resp", "delete_plan_resp"]), planningRespRouter);

export default registerRouter;
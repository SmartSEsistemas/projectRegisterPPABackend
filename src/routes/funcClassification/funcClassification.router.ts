import { Router } from "express";
import { permission } from "../../middlewares/permissions.js";
import planningStandardResourceRouter from "./planningStandardResource.router.js";
import planningFunctionRouter from "./planningFunction.router.js";
import planningSubFunctionRouter from "./planningSubFunction.router.js";
import planningTypeResourceRouter from "./planningTypeResource.router.js";
import planningMarkerRouter from "./planningMarker.router.js";
import planningStandardNrCostRouter from "./planningStandardNrCost.router.js";

const funcClassificationRouter = Router();

funcClassificationRouter.use("/standard_resource",
  permission(["create_standard_resource", "update_standard_resource", "get_standard_resource", "delete_standard_resource"]), planningStandardResourceRouter);

funcClassificationRouter.use("/standard_nr_revenue",
  permission(["create_standard_nr_revenue", "update_standard_nr_revenue", "get_standard_nr_revenue", "delete_standard_nr_revenue"]), planningStandardResourceRouter);

funcClassificationRouter.use("/function",
  permission(["create_function", "update_function", "get_function", "delete_function"]), planningFunctionRouter);

funcClassificationRouter.use("/sub_function",
  permission(["create_sub_function", "update_sub_function", "get_sub_function", "delete_sub_function"]), planningSubFunctionRouter);

funcClassificationRouter.use("/type_resource",
  permission(["create_type_resource", "update_type_resource", "get_type_resource", "delete_type_resource"]), planningTypeResourceRouter);

funcClassificationRouter.use("/marker",
  permission(["create_marker", "update_marker", "get_marker", "delete_marker"]), planningMarkerRouter);

funcClassificationRouter.use("/standard_nr_cost",
  permission(["create_standard_nr_cost", "update_standard_nr_cost", "get_standard_nr_cost", "delete_standard_nr_cost"]), planningStandardNrCostRouter);

export default funcClassificationRouter;
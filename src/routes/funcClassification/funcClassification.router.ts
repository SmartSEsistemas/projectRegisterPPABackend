import { Router } from "express";
import planningStandardResourceRouter from "./planningStandardResource.router.js";
import planningFunctionRouter from "./planningFunction.router.js";
import planningSubFunctionRouter from "./planningSubFunction.router.js";
import planningTypeResourceRouter from "./planningTypeResource.router.js";
import planningMarkerRouter from "./planningMarker.router.js";
import planningStandardNrCostRouter from "./planningStandardNrCost.router.js";
import planningStandardNrResourceRouter from "./planningStandardNrRevenue.router.js";
import planningResourceRouter from "./planningResource.router.js";
import planningNatureRevenueRouter from "./planningNatureRevenue.router.js";
import planningNrRevenueXResourceRouter from "./planningNrRevenueXResource.router.js";
import planningNatureCostRouter from "./planningNatureCost.router.js";
import planningResourceXMarkerRouter from "./planningResourceXMarker.router.js";
import planningNrCostXMarkerRouter from "./planningNrCostXMarker.router.js";
import planningNrRevenueXMarkerRouter from "./planningNrRevenueXMarker.router.js";

const funcClassificationRouter = Router();

funcClassificationRouter.use("/standard_resource", planningStandardResourceRouter);
funcClassificationRouter.use("/standard_nr_revenue", planningStandardNrResourceRouter);
funcClassificationRouter.use("/standard_nr_cost", planningStandardNrCostRouter);

funcClassificationRouter.use("/function", planningFunctionRouter);
funcClassificationRouter.use("/sub_function", planningSubFunctionRouter);

funcClassificationRouter.use("/marker", planningMarkerRouter);
funcClassificationRouter.use("/resource_x_marker", planningResourceXMarkerRouter);
funcClassificationRouter.use("/nrcost_x_marker", planningNrCostXMarkerRouter);
funcClassificationRouter.use("/nrrevenue_x_marker", planningNrRevenueXMarkerRouter);

funcClassificationRouter.use("/resource", planningResourceRouter);
funcClassificationRouter.use("/nature_revenue", planningNatureRevenueRouter);
funcClassificationRouter.use("/nrrevenue_x_resource", planningNrRevenueXResourceRouter);
funcClassificationRouter.use("/type_resource", planningTypeResourceRouter);
funcClassificationRouter.use("/nature_cost", planningNatureCostRouter);

export default funcClassificationRouter;
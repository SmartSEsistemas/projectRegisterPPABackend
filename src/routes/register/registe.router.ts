import { Router } from "express";
import planningUnitMeasureRouter from "./planningUnitMeasure.router.js";
import planningTypeRespRouter from "./planningTypeResp.router.js";
import planningRespRouter from "./planningResp.router.js";

const registerRouter = Router();

registerRouter.use("/plan_unit_measure", planningUnitMeasureRouter);
registerRouter.use("/plan_type_resp", planningTypeRespRouter);
registerRouter.use("/plan_resp", planningRespRouter);

export default registerRouter;
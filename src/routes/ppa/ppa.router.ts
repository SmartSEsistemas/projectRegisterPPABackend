import { Router } from "express";
import planningProjectRouter from "./planningProject.router";
import planningLawRouter from "./planningLaw.router";
import planningLawAltRouter from "./planningLawAlt.router";


const ppaRouter = Router();

ppaRouter.use("/project", planningProjectRouter);
ppaRouter.use("/law_ppa", planningLawRouter);
ppaRouter.use("/law_alt", planningLawAltRouter);

export default ppaRouter;
import { NextFunction, Request, Response, Router } from "express";
import registerRouter from "./register/registe.router.js";
import funcClassificationRouter from "./funcClassification/funcClassification.router.js";
import authentication from "../middlewares/Authentication.js";
import ppaProjectRouter from "./ppa/planningProject.router.js";

const routes = Router();

routes.use('/register',
  authentication.required,
  registerRouter);

routes.use('/func_classification',
  authentication.required,
  funcClassificationRouter);

routes.use('/ppa',
  // authentication.required,
  ppaProjectRouter);

routes.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ message: 'Rota inválida' });
  next();
})

export default routes;
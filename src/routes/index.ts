import { NextFunction, Request, Response, Router } from "express";
import registerRouter from "./register/registe.router.js";
import funcClassificationRouter from "./funcClassification/funcClassification.router.js";
import authentication from "../middlewares/Authentication.js";

const routes = Router();

routes.use('/register',
  authentication.required,
  registerRouter);

routes.use('/func_classification',
  // authentication.required,
  funcClassificationRouter);

routes.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ message: 'Rota inválida' });
  next();
})

export default routes;
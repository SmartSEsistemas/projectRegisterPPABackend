import { NextFunction, Request, Response, Router } from "express";
import registerRouter from "./register/registe.router.js";

const routes = Router();

routes.use('/register', registerRouter);

routes.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ message: 'Rota inválida' });
  next();
})

export default routes;
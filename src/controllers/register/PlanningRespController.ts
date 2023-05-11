import { Response } from "express";
import { AppError } from "../../helper/AppError.js";
import { RequestWithUser } from "../../protocols/RequestWithUser.js";
import planningRespService from "../../services/register/PlanningRespService.js";

class PlanningRespController {
  async register({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningRespService.create(body);
    return res.status(201).json(result);
  }

  async update({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningRespService.update(body);
    return res.status(200).json(result);
  }

  async resp({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningRespService.get(body);
    return res.status(200).json(result);
  }

  async delete({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningRespService.delete(body);
    return res.status(200).json(result);
  }
}

export default new PlanningRespController();
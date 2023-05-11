import { Response } from "express";
import { AppError } from "../../helper/AppError.js";
import { RequestWithUser } from "../../protocols/RequestWithUser.js";
import planningTypeRespService from "../../services/register/PlanningTypeRespService.js";

class PlanningTypeRespController {
  async register({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningTypeRespService.create(body);
    return res.status(201).json(result);
  }

  async update({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningTypeRespService.update(body);
    return res.status(200).json(result);
  }

  async typeResp({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningTypeRespService.get(body);
    return res.status(200).json(result);
  }

  async delete({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningTypeRespService.delete(body);
    return res.status(200).json(result);
  }
}

export default new PlanningTypeRespController();
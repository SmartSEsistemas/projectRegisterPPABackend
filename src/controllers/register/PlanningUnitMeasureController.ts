import { Response } from "express";
import { AppError } from "../../helper/AppError.js";
import { RequestWithUser } from "../../protocols/RequestWithUser.js";
import planningUnitMeasureService from "../../services/register/PlanningUnitMeasureService.js";

class PlanningUnitMeasureController {
  async register({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningUnitMeasureService.create(body);
    return res.status(201).json(result);
  }

  async update({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningUnitMeasureService.update(body);
    return res.status(200).json(result);
  }

  async unit({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningUnitMeasureService.get(body);
    return res.status(200).json(result);
  }

  async delete({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningUnitMeasureService.delete(body);
    return res.status(200).json(result);
  }
}

export default new PlanningUnitMeasureController();
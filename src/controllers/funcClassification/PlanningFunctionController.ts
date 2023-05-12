import { Response } from "express";
import { AppError } from "../../helper/AppError.js";
import { RequestWithUser } from "../../protocols/RequestWithUser.js";
import planningFunctionService from "../../services/funcClassification/PlanningFunctionService.js";

class PlanningFunctionController {
  async register({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningFunctionService.create(body);
    return res.status(201).json(result);
  }

  async update({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningFunctionService.update(body);
    return res.status(200).json(result);
  }

  async show(req: RequestWithUser, res: Response) {
    const id = req.params.id
    if (!id || !Number(id)) throw new AppError('Informações não enviadas ou incorreta');
    const result = await planningFunctionService.get(Number(id));
    return res.status(200).json(result);
  }

  async delete(req: RequestWithUser, res: Response) {
    const id = req.params.id
    if (!id || !Number(id)) throw new AppError('Informações não enviadas ou incorreta');
    const result = await planningFunctionService.delete(Number(id));
    return res.status(200).json(result);
  }
}

export default new PlanningFunctionController();
import { Response } from "express";
import { AppError } from "../../helper/AppError.js";
import { RequestWithUser } from "../../protocols/RequestWithUser.js";
import planningTypeResourceService from "../../services/funcClassification/PlanningTypeResourceService.js";

class PlanningTypeResourceController {
  async register({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningTypeResourceService.create(body);
    return res.status(201).json(result);
  }

  async update({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningTypeResourceService.update(body);
    return res.status(200).json(result);
  }

  async show(req: RequestWithUser, res: Response) {
    const id = req.params.id
    if (!id || !Number(id)) throw new AppError('Informações não enviadas ou incorreta');
    const result = await planningTypeResourceService.get(Number(id));
    return res.status(200).json(result);
  }

  async delete(req: RequestWithUser, res: Response) {
    const id = req.params.id
    if (!id || !Number(id)) throw new AppError('Informações não enviadas ou incorreta');
    const result = await planningTypeResourceService.delete(Number(id));
    return res.status(200).json(result);
  }
}

export default new PlanningTypeResourceController();
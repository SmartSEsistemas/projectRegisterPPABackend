import { Response } from "express";
import { AppError } from "../../helper/AppError.js";
import { RequestWithUser } from "../../protocols/RequestWithUser.js";
import planningStandardResourceService from "../../services/funcClassification/PlanningStandardResourceService.js";

class PlanningStandardResourceController {
  async register({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningStandardResourceService.create(body);
    return res.status(201).json(result);
  }

  async update({ body }: RequestWithUser, res: Response) {
    if (!body) throw new AppError('Informações não enviadas');
    const result = await planningStandardResourceService.update(body);
    return res.status(200).json(result);
  }

  async show(req: RequestWithUser, res: Response) {
    const id = req.params.id
    if (!id || !Number(id)) throw new AppError('Informações não enviadas ou incorreta');
    const result = await planningStandardResourceService.get(Number(id));
    return res.status(200).json(result);
  }

  async delete(req: RequestWithUser, res: Response) {
    const id = req.params.id
    if (!id || !Number(id)) throw new AppError('Informações não enviadas ou incorreta');
    const result = await planningStandardResourceService.delete(Number(id));
    return res.status(200).json(result);
  }
}

export default new PlanningStandardResourceController();
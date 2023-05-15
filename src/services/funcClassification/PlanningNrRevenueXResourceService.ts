import { NrRevenueXResourceDTO } from "../../dto/funcClassification/NrRevenueXResourceDTO";
import { NrRevenueXResourceUpdateDTO } from "../../dto/funcClassification/NrRevenueXResourceUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningNrRevenueXResourceService {
  async create(body: NrRevenueXResourceDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_nrrevenue_x_resource.create({ data: body })
      .then(() => ({ status: 'success', message: 'Natureza de receita X recurso criada.' }))
  }

  async update({ nrrevenue_resource, nrrevenue_resource_id }: NrRevenueXResourceUpdateDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_nrrevenue_x_resource.update({
      where: { id: nrrevenue_resource_id },
      data: nrrevenue_resource
    })
      .then(() => ({ status: 'success', message: 'Natureza de receita X recurso atualizada.' }))
  }

  async get(id: number): Promise<NrRevenueXResourceDTO | null> {
    return await prismaInstance.prisma().planning_nrrevenue_x_resource.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_nrrevenue_x_resource.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Natureza de receita X recurso deletada.' }))
      .catch(() => { throw new AppError("Natureza de receita X recurso não encontrada ou error ao deletar.") })
  }
}

export default new PlanningNrRevenueXResourceService();
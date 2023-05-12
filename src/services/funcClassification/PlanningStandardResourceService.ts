import { StandardResourceDTO } from "../../dto/funcClassification/StandardResourceDTO";
import { StandardResourceUpdateDTO } from "../../dto/funcClassification/StandardResourceUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningStandardResourceService {
  async create(body: StandardResourceDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_standard_resource.create({ data: body })
      .then(() => ({ status: 'success', message: 'Padrão de recurso criado.' }))
  }

  async update({ standard_resource, standard_resource_id }: StandardResourceUpdateDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_standard_resource.update({
      where: { id: standard_resource_id },
      data: standard_resource
    })
      .then(() => ({ status: 'success', message: 'Padrão de recurso atualizado.' }))
  }

  async get(id: number): Promise<StandardResourceDTO | null> {
    return await prismaInstance.prisma().planning_standard_resource.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_standard_resource.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Padrão de recurso deletado.' }))
      .catch(() => { throw new AppError("Padrão de recurso não encontrado ou error ao deletar.") })
  }
}

export default new PlanningStandardResourceService();
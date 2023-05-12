import { TypeResourceDTO } from "../../dto/funcClassification/TypeResourceDTO";
import { TypeResourceUpdateDTO } from "../../dto/funcClassification/TypeResourceUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningTypeResourceService {
  async create(body: TypeResourceDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_type_resource.create({ data: body })
      .then(() => ({ status: 'success', message: 'Tipo de recurso criado.' }))
  }

  async update({ type_resource, type_resource_id }: TypeResourceUpdateDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_type_resource.update({
      where: { id: type_resource_id },
      data: type_resource
    })
      .then(() => ({ status: 'success', message: 'Tipo de recurso atualizado.' }))
  }

  async get(id: number): Promise<TypeResourceDTO | null> {
    return await prismaInstance.prisma().planning_type_resource.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_type_resource.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Tipo de recurso deletado.' }))
      .catch(() => { throw new AppError("Tipo de recurso não encontrado ou error ao deletar.") })
  }
}

export default new PlanningTypeResourceService();
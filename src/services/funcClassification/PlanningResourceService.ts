import { ResourceDTO } from "../../dto/funcClassification/ResourceDTO";
import { ResourceUpdateDTO } from "../../dto/funcClassification/ResourceUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import testStandardResource from "../../helper/testStandardResource.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningResourceService {
  async create(body: ResourceDTO): Promise<ResultResponseMessage> {
    await testStandardResource(body.standard_resource_id, body.number);

    await this.checkIds(body.planning_type_resource_id, body.superavit, body.planning_resource_id);

    return await prismaInstance.prisma().planning_resource.create({ data: body })
      .then(() => ({ status: 'success', message: 'Recurso criado.' }))
  }

  async update({ resource, resource_id }: ResourceUpdateDTO): Promise<ResultResponseMessage> {
    const { number, standard_resource_id, planning_resource_id, superavit, planning_type_resource_id } = resource;

    if (number && standard_resource_id) await testStandardResource(standard_resource_id, number);
    await this.checkIds(planning_type_resource_id, superavit, planning_resource_id);

    return await prismaInstance.prisma().planning_resource.update({
      where: { id: resource_id },
      data: resource
    })
      .then(() => ({ status: 'success', message: 'Recurso atualizado.' }))
  }

  async get(id: number) {
    return await prismaInstance.prisma().planning_resource.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_resource.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Recurso deletado.' }))
      .catch(() => { throw new AppError("Recurso não encontrado ou error ao deletar.") })
  }

  private async checkIds(type_resource_id: number | undefined, superavit: boolean | undefined, resource_id: number | undefined) {
    if (!await prismaInstance.prisma().planning_type_resource.findUnique({ where: { id: type_resource_id } })) throw new AppError('ID do planejamento do tipo do recurso não enviado ou incorreto.')

    if (superavit) await prismaInstance.prisma().planning_resource.findUnique({ where: { id: resource_id } })
      .catch(() => { throw new AppError('ID do planejamento de recurso não enviado ou incorreto.') })
  }
}

export default new PlanningResourceService();
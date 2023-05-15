import { v4 as uuid } from 'uuid';
import { StandardResourceDTO } from "../../dto/funcClassification/StandardResourceDTO";
import { StandardResourceUpdateDTO } from "../../dto/funcClassification/StandardResourceUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";
import planningTypeResourceService from './PlanningTypeResourceService.js';

class PlanningStandardResourceService {
  async create({ standards }: { standards: StandardResourceDTO[] }): Promise<ResultResponseMessage> {

    const findTypeStandard = standards.map((standard) => planningTypeResourceService.get(standard.type_resource_id));

    (await Promise.all(findTypeStandard)).map((type, index) => {
      if (!type) throw new AppError(`Tipo de recurso informado na posição ${index + 1} não encontrado.`)
    })

    const general_id = uuid();
    const standardResources = standards.map((standard) => {
      return { ...standard, number_of_standard: general_id }
    })

    return await prismaInstance.prisma().planning_standard_resource.createMany({
      data: standardResources
    })
      .then(() => ({ status: 'success', message: 'Padrão de recurso criado.' }))
  }

  async update({ standard_resource, standard_resource_id }: StandardResourceUpdateDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_standard_resource.update({
      where: { id: standard_resource_id },
      data: standard_resource
    })
      .then(() => ({ status: 'success', message: 'Padrão de recurso atualizado.' }))
  }

  async get(id: string): Promise<StandardResourceDTO[] | null> {
    return await prismaInstance.prisma().planning_standard_resource.findMany({ where: { number_of_standard: id } })
  }

  async delete(id: string): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_standard_resource.deleteMany({ where: { number_of_standard: id } })
      .then(() => ({ status: 'success', message: 'Padrão de recurso deletado.' }))
      .catch(() => { throw new AppError("Padrão de recurso não encontrado ou error ao deletar.") })
  }
}

export default new PlanningStandardResourceService();
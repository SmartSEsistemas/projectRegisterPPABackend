import { NatureCostDTO } from "../../dto/funcClassification/NatureCostDTO";
import { NatureCostUpdateDTO } from "../../dto/funcClassification/NatureCostUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import testStandardResource from "../../helper/testStandardResource.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningNatureCostService {
  async create(body: NatureCostDTO): Promise<ResultResponseMessage> {
    await testStandardResource(body.standard_resource_id, body.number);

    return await prismaInstance.prisma().planning_nature_cost.create({ data: body })
      .then(() => ({ status: 'success', message: 'Natureza de despesa criada.' }))
  }

  async update({ nature_cost, nature_cost_id }: NatureCostUpdateDTO): Promise<ResultResponseMessage> {
    const { number, standard_resource_id } = nature_cost;

    if (number && standard_resource_id) await testStandardResource(standard_resource_id, number);

    return await prismaInstance.prisma().planning_nature_cost.update({
      where: { id: nature_cost_id },
      data: nature_cost
    })
      .then(() => ({ status: 'success', message: 'Natureza de despesa atualizada.' }))
  }

  async get(id: number) {
    return await prismaInstance.prisma().planning_nature_cost.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_nature_cost.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Natureza de despesa deletada.' }))
      .catch(() => { throw new AppError("Natureza de despesa não encontrada ou error ao deletar.") })
  }
}

export default new PlanningNatureCostService();
import { StandardNrCostDTO } from "../../dto/funcClassification/StandardNrCostDTO";
import { StandardNrCostUpdateDTO } from "../../dto/funcClassification/StandardNrCostUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningStandardNrCostService {
  async create(body: StandardNrCostDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_standard_nr_cost.create({ data: body })
      .then(() => ({ status: 'success', message: 'Padrão natureza despesa criada.' }))
  }

  async update({ standard_nr_cost, standard_nr_cost_id }: StandardNrCostUpdateDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_standard_nr_cost.update({
      where: { id: standard_nr_cost_id },
      data: standard_nr_cost
    })
      .then(() => ({ status: 'success', message: 'Padrão natureza despesa atualizada.' }))
  }

  async get(id: number): Promise<StandardNrCostDTO | null> {
    return await prismaInstance.prisma().planning_standard_nr_cost.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_standard_nr_cost.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Padrão natureza despesa deletada.' }))
      .catch(() => { throw new AppError("Padrão natureza despesa não encontrada ou error ao deletar.") })
  }
}

export default new PlanningStandardNrCostService();
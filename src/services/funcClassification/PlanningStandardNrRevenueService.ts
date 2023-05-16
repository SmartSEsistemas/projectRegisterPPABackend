import { Planning_standard_nr_revenue } from "@prisma/client";
import { StandardNrRevenueDTO } from "../../dto/funcClassification/StandardNrRevenueDTO";
import { StandardNrRevenueUpdateDTO } from "../../dto/funcClassification/StandardNrRevenueUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningStandardNrRevenueService {
  async create(body: StandardNrRevenueDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_standard_nr_revenue.create({ data: body })
      .then(() => ({ status: 'success', message: 'Padrão natureza receita criado.' }))
  }

  async update({ standard_nr_revenue, standard_nr_revenue_id }: StandardNrRevenueUpdateDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_standard_nr_revenue.update({
      where: { id: standard_nr_revenue_id },
      data: standard_nr_revenue
    })
      .then(() => ({ status: 'success', message: 'Padrão natureza receita atualizado.' }))
  }

  async get(id: number): Promise<Planning_standard_nr_revenue | null> {
    return await prismaInstance.prisma().planning_standard_nr_revenue.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_standard_nr_revenue.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Padrão natureza receita deletado.' }))
      .catch(() => { throw new AppError("Padrão natureza receita não encontrado ou error ao deletar.") })
  }
}

export default new PlanningStandardNrRevenueService();
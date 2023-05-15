import { NatureRevenueDTO } from "../../dto/funcClassification/NatureRevenueDTO";
import { NatureRevenueUpdateDTO } from "../../dto/funcClassification/NatureRevenueUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import testStandardResource from "../../helper/testStandardResource.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningNatureRevenueService {
  async create(body: NatureRevenueDTO): Promise<ResultResponseMessage> {
    await testStandardResource(body.standard_resource_id, body.number);

    await this.checkTypeResource(body.planning_type_resource_id);

    return await prismaInstance.prisma().planning_nature_revenue.create({ data: body })
      .then(() => ({ status: 'success', message: 'Natureza de recurso criado.' }))
  }

  async update({ nature_revenue, nature_revenue_id }: NatureRevenueUpdateDTO): Promise<ResultResponseMessage> {
    const { number, standard_resource_id, planning_type_resource_id } = nature_revenue;

    if (number && standard_resource_id) await testStandardResource(standard_resource_id, number);
    await this.checkTypeResource(planning_type_resource_id);

    return await prismaInstance.prisma().planning_nature_revenue.update({
      where: { id: nature_revenue_id },
      data: nature_revenue
    })
      .then(() => ({ status: 'success', message: 'Natureza de recurso atualizado.' }))
  }

  async get(id: number) {
    return await prismaInstance.prisma().planning_nature_revenue.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_nature_revenue.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Natureza de recurso deletado.' }))
      .catch(() => { throw new AppError("Natureza de recurso não encontrado ou error ao deletar.") })
  }

  private async checkTypeResource(type_resource_id: number | undefined) {
    if (!await prismaInstance.prisma().planning_type_resource.findUnique({ where: { id: type_resource_id } })) throw new AppError('ID do planejamento do tipo do Natureza de recurso não enviado ou incorreto.');
  }
}

export default new PlanningNatureRevenueService();
import { UnitMeasureDTO } from "../../dto/register/UnitMeasureDTO";
import { UnitMeasureUpdateDTO } from "../../dto/register/UnitMeasureUpdateDTO";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage";

class PlanningUnitMeasureService {
  async create(body: UnitMeasureDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_unit_measure.create({ data: body })
      .then(() => ({ status: 'success', message: 'Planejamento de unidade de medida criado.' }))
  }

  async update({ unit_measure, unit_measure_id }: UnitMeasureUpdateDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_unit_measure.update({
      where: { id: unit_measure_id },
      data: unit_measure
    })
      .then(() => ({ status: 'success', message: 'Planejamento de unidade de medida atualizado.' }))
  }

  async get(id: number): Promise<UnitMeasureDTO | null> {
    return await prismaInstance.prisma().planning_unit_measure.findUnique({ where: { id }, select: { description: true, entity_id: true } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_unit_measure.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Planejamento de unidade de medida deletado.' }))
  }
}

export default new PlanningUnitMeasureService();
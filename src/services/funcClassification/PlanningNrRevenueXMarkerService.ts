import { NrRevenueXMarkerDTO } from "../../dto/funcClassification/NrRevenueXMarkerDTO";
import { NrRevenueXMarkerUpdateDTO } from "../../dto/funcClassification/NrRevenueXMarkerUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningNrRevenueXMarkerService {
  async create(body: NrRevenueXMarkerDTO): Promise<ResultResponseMessage> {

    await this.checkeTables(body.planning_nature_revenue_id, body.planning_marker_id);

    return await prismaInstance.prisma().planning_nrrevenue_x_marker.create({ data: body })
      .then(() => ({ status: 'success', message: 'Natureza de receita X marcador criado.' }))
  }

  async update({ nrrevenue_marker, nrrevenue_marker_id }: NrRevenueXMarkerUpdateDTO): Promise<ResultResponseMessage> {
    await this.checkeTables(nrrevenue_marker.planning_nature_revenue_id, nrrevenue_marker.planning_marker_id);

    return await prismaInstance.prisma().planning_nrrevenue_x_marker.update({
      where: { id: nrrevenue_marker_id },
      data: nrrevenue_marker
    })
      .then(() => ({ status: 'success', message: 'Natureza de receita X marcador atualizado.' }))
  }

  async get(id: number): Promise<NrRevenueXMarkerDTO | null> {
    return await prismaInstance.prisma().planning_nrrevenue_x_marker.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_nrrevenue_x_marker.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Natureza de receita X marcador deletado.' }))
      .catch(() => { throw new AppError("Natureza de receita X marcador não encontrado ou error ao deletar.") })
  }

  async checkeTables(idResource: number, idMarker: number) {
    const resource = await prismaInstance.prisma().planning_nature_revenue.findUnique({ where: { id: idResource } });
    const marker = await prismaInstance.prisma().planning_marker.findUnique({ where: { id: idMarker } })
    if (!resource || !marker) throw new AppError('Natureza de receita ou marcador não existe.')
  }
}

export default new PlanningNrRevenueXMarkerService();
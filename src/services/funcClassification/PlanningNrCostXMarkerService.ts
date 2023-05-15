import { NrCostXMarkerDTO } from "../../dto/funcClassification/NrCostXMarkerDTO";
import { NrCostXMarkerUpdateDTO } from "../../dto/funcClassification/NrCostXMarkerUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningNrCostXMarkerService {
  async create(body: NrCostXMarkerDTO): Promise<ResultResponseMessage> {

    await this.checkeTables(body.planning_nature_cost_id, body.planning_marker_id);

    return await prismaInstance.prisma().planning_nrcost_x_marker.create({ data: body })
      .then(() => ({ status: 'success', message: 'Natureza de despesa X marcador criado.' }))
  }

  async update({ nrcost_marker, nrcost_marker_id }: NrCostXMarkerUpdateDTO): Promise<ResultResponseMessage> {
    await this.checkeTables(nrcost_marker.planning_nature_cost_id, nrcost_marker.planning_marker_id);

    return await prismaInstance.prisma().planning_nrcost_x_marker.update({
      where: { id: nrcost_marker_id },
      data: nrcost_marker
    })
      .then(() => ({ status: 'success', message: 'Natureza de despesa X marcador atualizado.' }))
  }

  async get(id: number): Promise<NrCostXMarkerDTO | null> {
    return await prismaInstance.prisma().planning_nrcost_x_marker.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_nrcost_x_marker.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Natureza de despesa X marcador deletado.' }))
      .catch(() => { throw new AppError("Natureza de despesa X marcador não encontrado ou error ao deletar.") })
  }

  async checkeTables(idResource: number, idMarker: number) {
    const resource = await prismaInstance.prisma().planning_nature_cost.findUnique({ where: { id: idResource } });
    const marker = await prismaInstance.prisma().planning_marker.findUnique({ where: { id: idMarker } })
    if (!resource || !marker) throw new AppError('Natureza de despesa ou marcador não existe.')
  }
}

export default new PlanningNrCostXMarkerService();
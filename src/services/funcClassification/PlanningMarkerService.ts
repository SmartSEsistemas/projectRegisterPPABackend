import { MarkerDTO } from "../../dto/funcClassification/MarkerDTO";
import { MarkerUpdateDTO } from "../../dto/funcClassification/MarkerUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningMarkerService {
  async create(body: MarkerDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_marker.create({ data: body })
      .then(() => ({ status: 'success', message: 'Marcador criado.' }))
  }

  async update({ marker, marker_id }: MarkerUpdateDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_marker.update({
      where: { id: marker_id },
      data: marker
    })
      .then(() => ({ status: 'success', message: 'Marcador atualizado.' }))
  }

  async get(id: number): Promise<MarkerDTO | null> {
    return await prismaInstance.prisma().planning_marker.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_marker.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Marcador deletado.' }))
      .catch(() => { throw new AppError("Marcador não encontrado ou error ao deletar.") })
  }
}

export default new PlanningMarkerService();
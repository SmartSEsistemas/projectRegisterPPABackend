import { ResourceXMarkerDTO } from "../../dto/funcClassification/ResourceXMarkerDTO";
import { ResourceXMarkerUpdateDTO } from "../../dto/funcClassification/ResourceXMarkerUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningResourceMarkerService {
  async create(body: ResourceXMarkerDTO): Promise<ResultResponseMessage> {

    await this.checkeTables(body.planning_resource_id, body.planning_marker_id);

    return await prismaInstance.prisma().planning_resource_x_marker.create({ data: body })
      .then(() => ({ status: 'success', message: 'Recurso X marcador criado.' }))
  }

  async update({ resource_marker, resource_marker_id }: ResourceXMarkerUpdateDTO): Promise<ResultResponseMessage> {
    await this.checkeTables(resource_marker.planning_resource_id, resource_marker.planning_marker_id);

    return await prismaInstance.prisma().planning_resource_x_marker.update({
      where: { id: resource_marker_id },
      data: resource_marker
    })
      .then(() => ({ status: 'success', message: 'Recurso X marcador atualizado.' }))
  }

  async get(id: number): Promise<ResourceXMarkerDTO | null> {
    return await prismaInstance.prisma().planning_resource_x_marker.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_resource_x_marker.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Recurso X marcador deletado.' }))
      .catch(() => { throw new AppError("Recurso X marcador não encontrado ou error ao deletar.") })
  }

  async checkeTables(idResource: number, idMarker: number) {
    const resource = await prismaInstance.prisma().planning_resource.findUnique({ where: { id: idResource } });
    const marker = await prismaInstance.prisma().planning_marker.findUnique({ where: { id: idMarker } })
    if (!resource || !marker) throw new AppError('Recurso ou marcador não existe.')
  }
}

export default new PlanningResourceMarkerService();
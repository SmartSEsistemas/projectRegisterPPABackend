import { TypeRespDTO } from "../../dto/register/TypeRespDTO";
import { TypeRespUpdateDTO } from "../../dto/register/TypeRespUpdateDTO";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage";

class PlanningTypeRespService {
  async create(body: TypeRespDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_type_resp.create({ data: body })
      .then(() => ({ status: 'success', message: 'Tipo responsável criado.' }))
  }

  async update({ type_resp, type_resp_id }: TypeRespUpdateDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_type_resp.update({
      where: { id: type_resp_id },
      data: type_resp
    })
      .then(() => ({ status: 'success', message: 'Tipo responsável atualizado.' }))
  }

  async get(id: number): Promise<TypeRespDTO | null> {
    return await prismaInstance.prisma().planning_type_resp.findUnique({
      where: { id },
      select: {
        description: true,
        entity_id: true,
        default: true,
        nb_tce: true
      }
    })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_type_resp.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Tipo responsável deletado.' }))
  }
}

export default new PlanningTypeRespService();
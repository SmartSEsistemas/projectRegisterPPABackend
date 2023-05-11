import { RespDTO } from "../../dto/register/RespDTO";
import { TypeRespUpdateDTO } from "../../dto/register/TypeRespUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningRespService {
  async create(body: RespDTO): Promise<ResultResponseMessage> {
    if (!await this.findTypeResp(body.planning_type_resp_id)) throw new AppError('Tipo de responsável não cadastrado.');
    return await prismaInstance.prisma().planning_resp.create({ data: body })
      .then(() => ({ status: 'success', message: 'Responsável vinculádo.' }))

  }

  async update({ type_resp, type_resp_id }: TypeRespUpdateDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_resp.update({
      where: { id: type_resp_id },
      data: type_resp
    })
      .then(() => ({ status: 'success', message: 'Responsável atualizado.' }))
  }

  async get(id: number): Promise<RespDTO | null> {
    return await prismaInstance.prisma().planning_resp.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_resp.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Responsável deletado.' }))
  }

  private async findTypeResp(id: number) {
    return await prismaInstance.prisma().planning_type_resp.findUnique({ where: { id } })
      .catch(() => { throw new AppError("Tipo de responsável não cadastrado.") })
  }
}

export default new PlanningRespService();
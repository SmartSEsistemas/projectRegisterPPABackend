import { Planning_law_ppa } from "@prisma/client";
import { LawDTO } from "../../dto/ppa/LawDTO";
import { LawUpdateDTO } from "../../dto/ppa/LawUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningLawService {
  async create(body: LawDTO): Promise<ResultResponseMessage> {
    await this.foundProject(body.planning_ppa_register_id);
    return await prismaInstance.prisma().planning_law_ppa.create({ data: body })
      .then(() => ({ status: 'success', message: 'Lei criada.' }))
  }

  async update({ law, law_id }: LawUpdateDTO): Promise<ResultResponseMessage> {
    await this.foundProject(law.planning_ppa_register_id);
    return await prismaInstance.prisma().planning_law_ppa.update({
      where: { id: law_id },
      data: law
    })
      .then(() => ({ status: 'success', message: 'Lei atualizadao.' }))
      .catch(() => { throw new AppError("Lei não encontrada ou error ao atualizar.") })
  }

  async get(id: number): Promise<Planning_law_ppa | null> {
    return await prismaInstance.prisma().planning_law_ppa.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_law_ppa.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Lei deletada.' }))
      .catch(() => { throw new AppError("Lei não encontrada ou error ao deletar.") })
  }

  async foundProject(id: number) {
    await prismaInstance.prisma().planning_ppa_register.findUnique({ where: { id } })
      .catch(() => { throw new AppError("PPA não encontrada.") })
  }
}

export default new PlanningLawService();
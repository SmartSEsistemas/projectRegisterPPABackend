import { LawDTO } from "../../dto/ppa/LawDTO";
import { LawUpdateDTO } from "../../dto/ppa/LawUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningLawAltService {
  async create(body: LawDTO): Promise<ResultResponseMessage> {
    await this.foundProject(body.planning_ppa_register_id);
    return await prismaInstance.prisma().planning_law_alt_ppa.create({ data: body })
      .then(() => ({ status: 'success', message: 'Alteração da lei criada.' }))
  }

  async update({ law, law_id }: LawUpdateDTO): Promise<ResultResponseMessage> {
    await this.foundProject(law.planning_ppa_register_id);
    return await prismaInstance.prisma().planning_law_alt_ppa.update({
      where: { id: law_id },
      data: law
    })
      .then(() => ({ status: 'success', message: 'Alteração da lei atualizadao.' }))
      .catch(() => { throw new AppError("Alteração da lei não encontrada ou error ao atualizar.") })
  }

  async get(id: number): Promise<LawDTO | null> {
    return await prismaInstance.prisma().planning_law_alt_ppa.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_law_alt_ppa.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Alteração da lei deletada.' }))
      .catch(() => { throw new AppError("Alteração da lei não encontrada ou error ao deletar.") })
  }

  async foundProject(id: number) {
    await prismaInstance.prisma().planning_ppa_register.findUnique({ where: { id } })
      .catch(() => { throw new AppError("PPA não encontrada.") })
  }
}

export default new PlanningLawAltService();
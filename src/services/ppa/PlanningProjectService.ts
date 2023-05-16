import { ProjectDTO } from "../../dto/ppa/ProjectDTO";
import { ProjectUpdateDTO } from "../../dto/ppa/ProjectUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningProjectService {
  async create(body: ProjectDTO): Promise<ResultResponseMessage> {

    const ppas = await prismaInstance.prisma().planning_ppa_register.findMany();
    const currentYear = new Date().getFullYear();
    const valid = ppas.some(({ quadrennium }) => {
      const years = quadrennium.split('/').map((year) => Number(year));
      return currentYear >= years[0] && currentYear <= years[1]
    })
    if (valid) throw new AppError('Já existe PPA cadastrada para esse período.')

    return await prismaInstance.prisma().planning_ppa_register.create({ data: body })
      .then(() => ({ status: 'success', message: 'Projeto criadao.' }))
  }

  async update({ project, project_id }: ProjectUpdateDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_ppa_register.update({
      where: { id: project_id },
      data: project
    })
      .then(() => ({ status: 'success', message: 'Projeto atualizadao.' }))
      .catch(() => { throw new AppError("Projeto não encontrada ou error ao atualizar.") })
  }

  async get(id: number): Promise<ProjectDTO | null> {
    return await prismaInstance.prisma().planning_ppa_register.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_ppa_register.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Projeto deletado.' }))
      .catch(() => { throw new AppError("Projeto não encontrada ou error ao deletar.") })
  }
}

export default new PlanningProjectService();
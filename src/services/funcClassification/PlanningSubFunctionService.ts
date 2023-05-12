import { Planning_function } from "@prisma/client";
import { SubFunctionDTO } from "../../dto/funcClassification/SubFunctionDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";
import { SubFunctionUpdateDTO } from "../../dto/funcClassification/SubFunctionUpdateDTO";

class PlanningSubFunctionService {
  async create(body: SubFunctionDTO): Promise<ResultResponseMessage> {
    if (!await this.findFunction(body.planning_function_id)) throw new AppError('Id da função incorreto.')
    return await prismaInstance.prisma().planning_sub_function.create({ data: body })
      .then(() => ({ status: 'success', message: 'Sub função criada.' }))
  }

  async update({ sub_function, sub_function_id }: SubFunctionUpdateDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_sub_function.update({
      where: { id: sub_function_id },
      data: sub_function
    })
      .then(() => ({ status: 'success', message: 'Sub função atualizada.' }))
  }

  async get(id: number): Promise<SubFunctionDTO | null> {
    return await prismaInstance.prisma().planning_sub_function.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_sub_function.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Sub função deletada.' }))
      .catch(() => { throw new AppError("Sub função não encontrada ou error ao deletar.") })
  }

  async findFunction(id: number): Promise<Planning_function | null> {
    return await prismaInstance.prisma().planning_function.findUnique({ where: { id } })
  }
}

export default new PlanningSubFunctionService();
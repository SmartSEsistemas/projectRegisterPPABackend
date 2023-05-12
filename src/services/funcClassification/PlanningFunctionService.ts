import { FunctionDTO } from "../../dto/funcClassification/FunctionDTO";
import { FunctionUpdateDTO } from "../../dto/funcClassification/FunctionUpdateDTO";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from "../../prisma/client.js"
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";

class PlanningFunctionService {
  async create(body: FunctionDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_function.create({ data: body })
      .then(() => ({ status: 'success', message: 'Função criada.' }))
  }

  async update({ function_body, function_id }: FunctionUpdateDTO): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_function.update({
      where: { id: function_id },
      data: function_body
    })
      .then(() => ({ status: 'success', message: 'Função atualizada.' }))
  }

  async get(id: number): Promise<FunctionDTO | null> {
    return await prismaInstance.prisma().planning_function.findUnique({ where: { id } })
  }

  async delete(id: number): Promise<ResultResponseMessage> {
    return await prismaInstance.prisma().planning_function.delete({ where: { id } })
      .then(() => ({ status: 'success', message: 'Função deletada.' }))
      .catch(() => { throw new AppError("Função não encontrada ou error ao deletar.") })
  }
}

export default new PlanningFunctionService();
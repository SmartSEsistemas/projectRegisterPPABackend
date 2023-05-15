import planningStandardResourceService from "../services/funcClassification/PlanningStandardResourceService.js";
import { AppError } from "./AppError.js";

export default async function (id: string, bodyNumber: string) {
  const standardArray = await planningStandardResourceService.get(id);
  if (!standardArray?.length) throw new AppError('Padrão de recurso informado não encontrado.');

  const standardOrder = standardArray.sort((a, b) => Number(a.level) - Number(b.level));

  const regexString = standardOrder.map(({ size_level, separator }, index) => index + 1 === standardOrder.length ? `\\d{${size_level}}` : `\\d{${size_level}}${'\\' + separator}`
  ).join('');
  const regex = new RegExp(regexString);

  if (!regex.test(bodyNumber)) throw new AppError('Numero informado não segue o padrão');
}
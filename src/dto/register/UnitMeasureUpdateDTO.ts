import { UnitMeasureDTO } from "./UnitMeasureDTO";

export interface UnitMeasureUpdateDTO {
  unit_measure_id: number;
  unit_measure: Partial<UnitMeasureDTO>
}
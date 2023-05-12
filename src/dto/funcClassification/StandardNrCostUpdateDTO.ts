import { StandardNrCostDTO } from "./StandardNrCostDTO";

export interface StandardNrCostUpdateDTO {
  standard_nr_cost_id: number;
  standard_nr_cost: Partial<StandardNrCostDTO>
}
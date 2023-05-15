import { NatureCostDTO } from "./NatureCostDTO";

export interface NatureCostUpdateDTO {
  nature_cost_id: number;
  nature_cost: Partial<NatureCostDTO>
}
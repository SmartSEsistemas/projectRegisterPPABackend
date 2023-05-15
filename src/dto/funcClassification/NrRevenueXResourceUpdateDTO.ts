import { NrRevenueXResourceDTO } from "./NrRevenueXResourceDTO";

export interface NrRevenueXResourceUpdateDTO {
  nrrevenue_resource_id: number;
  nrrevenue_resource: Partial<NrRevenueXResourceDTO>
}
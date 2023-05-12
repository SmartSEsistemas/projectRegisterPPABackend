import { StandardNrRevenueDTO } from "./StandardNrRevenueDTO";

export interface StandardNrRevenueUpdateDTO {
  standard_nr_revenue_id: number;
  standard_nr_revenue: Partial<StandardNrRevenueDTO>
}
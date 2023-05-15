import { NatureRevenueDTO } from "./NatureRevenueDTO";

export interface NatureRevenueUpdateDTO {
  nature_revenue_id: number;
  nature_revenue: Partial<NatureRevenueDTO>
}
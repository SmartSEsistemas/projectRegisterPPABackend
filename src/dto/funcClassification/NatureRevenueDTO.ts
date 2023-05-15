export interface NatureRevenueDTO {
  number: string;
  description: string;
  planning_type_resource_id: number;
  deduction: boolean;
  nr_deduction: string;
  year: number;
  start_date: Date;
  final_date: Date;
  standard_resource_id: string;
}
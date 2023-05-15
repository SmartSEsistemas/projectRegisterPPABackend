export interface ResourceDTO {
  number: string;
  description: string;
  year: number;
  start_date: Date;
  planning_type_resource_id: number;
  superavit: boolean;
  planning_resource_id?: number;
  standard_resource_id: string;
}
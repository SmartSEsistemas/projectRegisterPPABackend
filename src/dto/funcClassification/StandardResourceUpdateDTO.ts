import { StandardResourceDTO } from "./StandardResourceDTO";

export interface StandardResourceUpdateDTO {
  standard_resource_id: number;
  standard_resource: Partial<StandardResourceDTO>
}
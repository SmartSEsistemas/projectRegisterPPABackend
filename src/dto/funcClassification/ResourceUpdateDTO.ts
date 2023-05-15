import { ResourceDTO } from "./ResourceDTO";

export interface ResourceUpdateDTO {
  resource_id: number;
  resource: Partial<ResourceDTO>
}
import { TypeResourceDTO } from "./TypeResourceDTO";

export interface TypeResourceUpdateDTO {
  type_resource_id: number;
  type_resource: Partial<TypeResourceDTO>
}
import { TypeRespDTO } from "./TypeRespDTO";

export interface TypeRespUpdateDTO {
  type_resp_id: number;
  type_resp: Partial<TypeRespDTO>
}
import { RespDTO } from "./RespDTO";

export interface RespUpdateDTO {
  resp_id: number;
  resp: Partial<RespDTO>
}
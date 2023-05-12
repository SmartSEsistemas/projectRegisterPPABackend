import { FunctionDTO } from "./FunctionDTO";

export interface FunctionUpdateDTO {
  function_id: number;
  function_body: Partial<FunctionDTO>
}
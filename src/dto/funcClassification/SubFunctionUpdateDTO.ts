import { SubFunctionDTO } from "./SubFunctionDTO";

export interface SubFunctionUpdateDTO {
  sub_function_id: number;
  sub_function: Partial<SubFunctionDTO>
}
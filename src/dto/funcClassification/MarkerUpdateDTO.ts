import { MarkerDTO } from "./MarkerDTO";

export interface MarkerUpdateDTO {
  marker_id: number;
  marker: Partial<MarkerDTO>
}
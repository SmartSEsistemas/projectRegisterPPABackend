export interface StandardResourceDTO {
  description: string;
  level: string;
  separator: '.' | ',' | ';' | '-';
  size_level: number
  type_resource_id: number;
  type_tce: string;
}
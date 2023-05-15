import { ProjectDTO } from "./ProjectDTO";

export interface ProjectUpdateDTO {
  project_id: number;
  project: Partial<ProjectDTO>;
}
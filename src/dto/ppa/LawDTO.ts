export interface LawDTO {
  law: string;
  date: Date;
  type_local_publication: 'DIARIO ESTADO' | 'DIARIO MUNICIPIO' | 'PLACAR' | 'JORNAL DE CIRCULAÇÃO' | 'SITE';
  local_publication: string;
  planning_ppa_register_id: number;
}
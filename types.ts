
export interface GlassSpec {
  id: string;
  name: string;
  uValue: number;
  shgc: number;
  vlt: number;
  color: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  category: string;
  description?: string;
}

export enum FacadeType {
  CURTAIN_WALL = 'Unitized Curtain Wall',
  STRUCTURAL_GLAZING = 'Structural Glazing',
  SPIDER_FITTING = 'Spider Fitting',
  SKYLIGHT = 'Skylight Systems'
}

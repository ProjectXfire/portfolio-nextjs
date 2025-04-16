export interface IData {
  id: string;
  name: string;
  year: number;
  school: string;
  link: string;
  demo?: string;
  image: string;
}

export interface ISkill {
  name: string;
  pathIcon: string;
}

export interface IProject {
  id: number;
  name: string;
  tags: string[];
  description: string;
  demo: string;
  code: string;
  image: string;
}

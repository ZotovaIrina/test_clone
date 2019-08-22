import IProject from './projects';

export default interface IMyResume {
  title: string;
  contacts: object;
  summary: IResumeSummary;
  projects: IProject[];
  education: IEducation
}

export interface IResumeSummary {
  experience: string[];
  familiar: string[];
}

export interface IEducation {
  degree: IEducationDetails[];
  courses: IEducationDetails[];
}

export interface IEducationDetails {
  startYear: string;
  endYear: string;
  title: string;
  url?: string;
}
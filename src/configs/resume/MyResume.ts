export default interface IMyResume {
  title: string;
  contacts: ILabelValue[];
  summary: IResumeSummary;
  projects: IProjectData;
  education: IEducation
}

export interface IResumeSummary {
  label: string;
  experience: IResumeArrayString;
  familiar: IResumeArrayString;
}

export interface IEducation {
  degree: IEducationData;
  courses: IEducationData;
}

export interface IEducationDetails {
  startYear: string;
  endYear: string;
  title: string;
  url?: string;
}

export interface IProject {
  name: string;
  image: string,
  notSoftwareProject?: boolean;
  start: string;
  end: string;
  position: string;
  address: string;
  website: string[];
  description: IResumeArrayString;
  technologies?: IResumeArrayString;
}

interface IResumeArrayString {
  label: string;
  value: string[]
}

interface IEducationData {
  label: string;
  value: IEducationDetails[]
}

interface IProjectData {
  label: string;
  value: IProject[]
}

interface ILabelValue {
  label: string;
  value: string
}
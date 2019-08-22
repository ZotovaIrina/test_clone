export default interface IProject {
  name: string;
  notSoftwareProject?: boolean;
  start: string;
  end: string;
  position: string;
  address: string;
  website: string[];
  description: string[];
  technologies?: string[];
}
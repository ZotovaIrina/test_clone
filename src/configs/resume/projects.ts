export default interface IProject {
  name: string;
  image: string,
  notSoftwareProject?: boolean;
  start: string;
  end: string;
  position: string;
  address: string;
  website: string[];
  description: string[];
  technologies?: string[];
}
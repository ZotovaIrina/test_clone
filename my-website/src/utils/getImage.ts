export enum ImageType {
  icon = 'icons'
}

const getImage = (file: string | null, type?: ImageType):string => {
  return file ?  require(`../images/${type ? type + '/' + file : file}`) : '';
};

export default getImage;
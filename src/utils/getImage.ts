const getImage = (file: string | null):string => {
  return file ?  require(`../images/${file}`) : '';
};

export default getImage;
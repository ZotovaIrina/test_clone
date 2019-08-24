const getImage = (file: string):string => {
  return require(`../images/${file}`);
};

export default getImage;
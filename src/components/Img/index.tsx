import React from 'react';

import { Image } from './styles';
import { PokemonTypes } from '../TypeTag';

export type ImgType = {
  type?: PokemonTypes;
};

export type ImgProps = {
  src: string;
  alt: string;
};

const Img = ({ type, src, alt }: ImgProps & ImgType) => {
  return <Image type={type} src={src} alt={alt} />;
};

export default Img;

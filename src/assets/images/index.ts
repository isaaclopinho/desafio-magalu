import logo from './logo.svg';
import smallLogo from './logo_menor.svg';

const Images = {
  logo,
  smallLogo,
};

export type ImageNames = keyof typeof Images;

export default Images;

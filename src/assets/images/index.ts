import logo from './logo.svg';
import smallLogo from './logo_menor.svg';
import captain from './captain-america-crying.png';

const Images = {
  logo,
  smallLogo,
  captain,
};

export type ImageNames = keyof typeof Images;

export default Images;

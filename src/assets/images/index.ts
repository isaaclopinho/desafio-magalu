import logo from './logo.svg';
import smallLogo from './logo_menor.svg';
import logoNoText from './logo_sem_texto.png';
import captain from './captain-america-crying.png';

const Images = {
  logo,
  smallLogo,
  captain,
  logoNoText,
};

export type ImageNames = keyof typeof Images;

export default Images;

import AvaliacaoOffIcon from './ic_avaliacao_off.svg';
import AvaliacaoOnIcon from './ic_avaliacao_on.svg';
import SmallSearchIcon from './ic_busca_menor.svg';
import SearchIcon from './ic_busca.svg';
import FavoriteOffIcon from './ic_coracao_vazio.svg';
import FavoriteOnIcon from './ic_coracao.svg';
import HeroIcon from './ic_heroi.svg';
import BookIcon from './ic_quadrinhos.svg';
import TrailerIcon from './ic_trailer.svg';

const Icons = {
  ratingOn: AvaliacaoOnIcon,
  ratingOff: AvaliacaoOffIcon,
  smallSearch: SmallSearchIcon,
  search: SearchIcon,
  favoriteOn: FavoriteOnIcon,
  favoriteOf: FavoriteOffIcon,
  hero: HeroIcon,
  book: BookIcon,
  trailer: TrailerIcon,
};

export type IconNames = keyof typeof Icons;

export default Icons;

import { AxiosConnection } from 'api/connection';

export default class MarvelConnection extends AxiosConnection {
  constructor() {
    super(process.env.REACT_APP_MARVEL_API);
  }
}

import moment from 'moment';
import { Md5 } from 'ts-md5/dist/md5';

type GenerateHashType = {
  ts: string;
  apikey: string;
  privateKey: string;
};

type GenerateParamsReturn = {
  ts: string;
  hash: string;
  apikey: string;
};

const GenerateHash = ({ ts, apikey, privateKey }: GenerateHashType): string =>
  Md5.hashStr(ts + privateKey + apikey);

const GenerateParams = ({
  apikey,
  privateKey,
}: Omit<GenerateHashType, 'ts'>): GenerateParamsReturn => {
  const ts = moment(Date.now()).format('X');
  const hash = GenerateHash({ ts, apikey, privateKey });
  return {
    ts,
    hash,
    apikey,
  };
};

export { GenerateParams };

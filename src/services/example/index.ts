import Api from 'api';
import { AxiosResponse } from 'axios';
import { GenerateParams } from 'utils/generate-hash';

export const ExampleGet = async (): Promise<AxiosResponse | unknown> => {
  try {
    const params = GenerateParams({
      apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY,
      privateKey: process.env.REACT_APP_MARVEL_API_PRIVATE_KEY,
    });

    const response = await Api.getInstance().get('/v1/public/comics', {
      params,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

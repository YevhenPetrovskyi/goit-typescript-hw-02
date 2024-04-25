import axios, { AxiosResponse } from 'axios';
import { ApiResponseType } from '../components/types';

const BASE_URL: string = 'https://api.unsplash.com';
const ACCESS_KEY: string = 'IMgd-JZNb9BN6sDOuDvJqXDAPY6O_etmim3DLFJMLNM';

axios.defaults.baseURL = BASE_URL;

type Params = {
  client_id: string;
  query: string;
  page: number;
  per_page: number;
  orientation: string;
};

const searchParams: Params = {
  client_id: ACCESS_KEY,
  query: '',
  page: 1,
  per_page: 20,
  orientation: 'landscape',
};

export const handleFetchPhotos = async (
  query: string,
  page: number
): Promise<ApiResponseType> => {
  const params = { ...searchParams, query, page };
  const response: AxiosResponse<ApiResponseType> =
    await axios.get<ApiResponseType>('/search/photos', { params });

  return response.data;
};

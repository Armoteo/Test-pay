import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { setToLocalStorage } from '../utils/helper';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const $api = axios.create({
  baseURL: apiUrl,
});

$api.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken') || '';
  const configRequest = config;
  configRequest.headers.Authorization = `Bearer ${accessToken}`;
  return configRequest;
});

interface IResponse {
  accessToken: string;
  refreshToken: string;
}

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  isRetry?: boolean;
}

axios.interceptors.response.use(
  (config) => config,
  async (errorRes: AxiosError) => {
    const originalRequest = errorRes.config as CustomAxiosRequestConfig;
    if (errorRes.response?.status === 401 && originalRequest && !originalRequest.isRetry) {
      originalRequest.isRetry = true;
      try {
        const response = await axios
          .get<{ data : IResponse } >(
          `${process.env.NEXT_PUBLIC_API_URL || ''}/auth/refresh_token`,
          { withCredentials: true },
        );
        Cookies.set('accessToken', response.data.data.accessToken);
        Cookies.set('refreshToken', response.data.data.refreshToken);
        return await axios.request(originalRequest);
      } catch (error: unknown) {
        setToLocalStorage('errorMessage', (error as Error).message);
      }
    }
    throw errorRes;
  },
);

export default $api;

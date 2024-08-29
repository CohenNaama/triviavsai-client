import axios from 'axios';
import config from '../config';

const axiosHttp = axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

axiosHttp.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    console.log("token:", token);
    
    return {
      ...config,
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
        ...config.headers,
      },
    };
  },
  (error) => Promise.reject(error)
);

axiosHttp.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('access_token');
    }
    return Promise.reject(error);
  }
);

export const Get = (url, payload) => axiosHttp.get(url, payload);
export const Post = async (url, payload, config = {}) => {
  return await axiosHttp.post(url, payload, config);
};
export const Patch = (url, payload) => axiosHttp.patch(url, payload);
export const Put = (url, payload) => axiosHttp.put(url, payload);
export const Delete = (url) => axiosHttp.delete(url);

export default axiosHttp;

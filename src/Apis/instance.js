import axios from 'axios';
import backendURL from '../config';
const instance = axios.create({ baseURL: backendURL });

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const locale = localStorage.getItem('LOCALE');
  config.headers['Content-Type'] = 'application/json';
  if (locale) {
    config.headers['LOCALE'] = locale;
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;

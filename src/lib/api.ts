import { env } from '@/config/env';
import Axios from 'axios';

const api = Axios.create({
  baseURL: env.API_URL,
});

export default api;

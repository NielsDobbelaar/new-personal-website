import Axios from 'axios';
import { AxiosCacheInstance, setupCache } from 'axios-cache-interceptor';

const instance = Axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

const ttl = process.env.CACHE_TTL;

let api = null;

if (ttl && parseInt(ttl)) {
  api = setupCache(instance, { ttl: parseInt(ttl), interpretHeader: false });
} else {
  api = setupCache(instance);
}

// eslint-disable-next-line
export default api as AxiosCacheInstance;

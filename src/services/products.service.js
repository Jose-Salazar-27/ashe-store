import axios from 'axios';

export const getProducts = controller => {
  const config = {
    method: 'GET',
    url: 'https://dummyjson.com/products',
    signal: controller.signal,
  };
  return axios.request(config);
};

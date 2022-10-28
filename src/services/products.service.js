import axios from 'axios';

export const getProducts = controller => {
  const config = {
    method: 'GET',
    url: 'https://dummyjson.com/products',
    signal: controller.signal,
  };
  return axios.request(config);
};

export const getSingleCategory = (category, controller) => {
  const config = {
    method: 'GET',
    url: 'https://dummyjson.com/products/category',
    signal: controller.signal,
    params: category,
  };

  return axios.request(config);
};

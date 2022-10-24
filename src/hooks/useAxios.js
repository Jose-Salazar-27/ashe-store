// External libraries dependendencies
import { useEffect, useState } from 'react';

export const useAxios = (requestFunction, adapter, dependendencies = []) => {
  const [products, setProducts] = useState([]);

  const controller = new AbortController();
  useEffect(() => {
    requestFunction(controller)
      .then(reponse => {
        const parsedResponse = adapter(reponse);
        setProducts(parsedResponse);
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
    return () => {
      // this is comment only while development
      //   controller.abort();
    };
  }, dependendencies);
  return { products };
};

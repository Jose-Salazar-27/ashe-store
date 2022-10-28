// External libraries dependendencies
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '@/redux/redux-slices/products.slice';

export const useAxios = (requestFunction, params, adapter, dependendencies = []) => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const controller = new AbortController();
  useEffect(() => {
    requestFunction(controller, params)
      .then(reponse => {
        const parsedResponse = adapter(reponse);
        dispatch(setProducts());
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
};

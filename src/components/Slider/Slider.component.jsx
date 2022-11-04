// Ecternal librereis dependencies
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { productsSelector } from '@/redux/redux-slices';

// Utilities
import { handleHorizontalScroll } from '@/utilities';

// Components and styled components
import { Filter } from './Filter';
import { Card } from '@/components';
import { ProductsSlider } from './ProductsSlider';

// TODO: improve this component. I want to use useRef for slider
export const Slider = () => {
  const { products } = useSelector(productsSelector);
  const [filter, setFilter] = useState({
    category: 'skincare',
    view: 1,
  });

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      {products.length > 1 ? <ProductsSlider id='slider' filter={filter} products={products} /> : <h2>loading...</h2>}
    </>
  );
};

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

export const Slider = () => {
  const { products, currentCategory } = useSelector(productsSelector);
  const [filter, setFilter] = useState({
    category: 'skincare',
    view: 1,
  });

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      {products.length > 1 ? <ProductsSlider id='slider' filter={filter} products={products} /> : <h2>loading...</h2>}

      <button onClick={() => handleHorizontalScroll('rigth', 'slider', 250)}>una mas</button>
      <br />
      <button onClick={() => handleHorizontalScroll('left', 'slider', 250)}>una menos</button>
    </>
  );
};

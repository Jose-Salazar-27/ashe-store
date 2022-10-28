// Ecternal librereis dependencies
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { productsSelector } from '@/redux/redux-slices';

// Components and styled components
import { Filter } from './Filter';
import { Card } from '@/components';
import { ProductsSlider } from './slider.styled';

export const Slider = () => {
  const { products, currentCategory } = useSelector(productsSelector);
  const [filter, setFilter] = useState({
    category: 'skincare',
    view: 1,
  });

  // TODO: change the scroll distance
  const handleScroll = side => {
    const slider = document.getElementById('slider');
    if (side === 'left') {
      slider.scrollLeft -= 500;
    } else {
      slider.scrollLeft += slider.offsetWidth;
    }
  };

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <ProductsSlider id='slider'>
        {products.length > 1 ? (
          products
            ?.filter(item => item.category === filter.category)
            .map(item => {
              return <Card key={item.id} obj={item} />;
            })
        ) : (
          <h2>loading...</h2>
        )}
      </ProductsSlider>

      <button onClick={() => handleScroll('rigth')}>una mas</button>
      <br />
      <button onClick={() => handleScroll('left')}>una menos</button>
    </>
  );
};

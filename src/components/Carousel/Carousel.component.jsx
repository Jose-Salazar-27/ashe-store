// External libraries depaendcies
import { useSelector } from 'react-redux';
import { productsSelector } from '@/redux/redux-slices';
import { Link } from 'react-router-dom';

// Components and styled components
import { CarouselLayout, CustomLink } from './carousel.styled';
import { Button } from '@/styled-components';

export const Carousel = () => {
  const { products } = useSelector(productsSelector);
  // console.log(products);
  return (
    <>
      {products.length > 1 ? (
        products.map((product, key) => {
          if (key < 1) {
            return (
              <CarouselLayout key={product.id} background={product.thumbnail}>
                <div className='container'>
                  <div>
                    <span className='slogan'>{product.brand}</span>
                    <h2 className='title'>{product.title}</h2>
                    <p className='description'>{product.description}</p>
                    <Button>
                      <CustomLink>View ritgh now</CustomLink>
                    </Button>
                  </div>
                </div>
              </CarouselLayout>
            );
          }
        })
      ) : (
        <h2>cargando...</h2>
      )}
    </>
  );
};

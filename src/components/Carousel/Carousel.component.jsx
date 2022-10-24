// External libraries depaendcies
import { Link } from 'react-router-dom';

// Components and styled components
import { CarouselLayout, CustomLink } from './carousel.styled';
import { Button } from '@/styled-components';

export const Carousel = ({ products, singleProduct }) => {
  return (
    <>
      {products ? (
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

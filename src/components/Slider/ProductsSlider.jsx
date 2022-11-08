import { Card } from '@/components';
import { SliderContainer } from './slider.styled';

export const ProductsSlider = ({ products, filter, id }) => {
  return (
    <SliderContainer id={id ? id : undefined}>
      {products
        ?.filter(item => item.category === filter.category)
        .map(item => {
          return <Card key={item.id} obj={item} />;
        })}
    </SliderContainer>
  );
};

// External libraries dependencies
import { useState, useEffect } from 'react';
import axios from 'axios';

// Hooks, context and utilities
import { useAxios } from '@/hooks';

// Services and adapters
import { getProducts } from '@/services';
import { productsAdapter } from '@/adapters';

// Components and styled components
import { CategoriesMenu, Carousel, Slider } from '@/components';
import { Container, FlexLayout } from '@/styled-components';

export default function Home() {
  useAxios(getProducts, null, productsAdapter);

  return (
    <Container>
      <h1>home</h1>
      <FlexLayout className='flex-layout'>
        <CategoriesMenu />
        <Carousel />
      </FlexLayout>
      <Slider />
    </Container>
  );
}

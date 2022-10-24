// External libraries dependencies
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// Hooks and utilities
import { useAxios } from '@/hooks';

// Services and adapters
import { getProducts } from '@/services';
import { productsAdapter } from '@/adapters';

// Components and styled components
import { CategoriesMenu, Carousel } from '@/components';
import { Container, FlexLayout } from '@/styled-components';

export default function Home() {
  const { products } = useAxios(getProducts, productsAdapter);
  if (products) console.log('products ok');
  return (
    <Container>
      <h1>home</h1>
      <FlexLayout className='flex-layout'>
        <CategoriesMenu />
        <Carousel products={products} />
      </FlexLayout>
    </Container>
  );
}

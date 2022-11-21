// External libraries dependencies
import { useState, useEffect } from 'react';
import axios from 'axios';

// Hooks, context and utilities
import { useAxios } from '@/hooks';

// Services and adapters
import { getProducts } from '@/services';
import { productsAdapter } from '@/adapters';

// Components and styled components
import { CategoriesMenu, Carousel, Slider, DiscoundGrid, Footer } from '@/components';
import { Container, FlexLayout } from '@/styled-components';
import { Banner } from '@/components/Banner/Banner.component';

export default function Home() {
  useAxios(getProducts, null, productsAdapter);

  return (
    <>
      <Container>
        <h1>home</h1>
        <FlexLayout className='flex-layout'>
          <CategoriesMenu />
          <Carousel />
        </FlexLayout>
        <Slider />
        <DiscoundGrid />
        <Banner
          rgba='rgba(0, 0, 0,  0.7)'
          category='furniture'
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
          imgURL='./src/assets/furniture.jpg'
          textSide='right'
          title='Luxurious red leather cabinet'
        />
      </Container>
      <Footer />
    </>
  );
}

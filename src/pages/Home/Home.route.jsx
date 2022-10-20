// External libraries dependencies
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// Components and styled components
import { CategoriesMenu } from '@/components';
import { Container, FlexLayout } from '@/styled-components';

// Components and Styled components

export default function Home() {
  return (
    <Container>
      <h1>home</h1>
      <FlexLayout>
        <div>ola</div>
        <CategoriesMenu />
      </FlexLayout>
    </Container>
  );
}

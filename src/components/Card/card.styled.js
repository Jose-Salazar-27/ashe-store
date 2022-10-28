import styled from 'styled-components';

export const CardLayout = styled.article`
  height: 100%;
  width: 40rem;

  & .card-img-container {
    height: 50%;
    width: 100%;
    padding: 0 0.2rem;
  }

  & .card-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

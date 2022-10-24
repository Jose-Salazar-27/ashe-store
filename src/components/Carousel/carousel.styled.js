// External libraries dependencies
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CarouselLayout = styled.div`
  background: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  width: calc(100% - 31rem);
  height: 60rem;
  color: #fff;

  & .container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem 6rem;
  }

  & .slogan {
    font-size: 1.8rem;
    text-transform: uppercase;
  }

  & .title {
    font-size: 6rem;
    margin: 1rem 0;
  }

  & .description {
    font-size: 1.4rem;
    color: #fff;
    opacity: 0.7;
  }
`;

export const CustomLink = styled(Link)`
  color: #fff;

  &:visited {
    color: #fff;
  }
`;

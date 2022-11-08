import styled from 'styled-components';
import { Button } from '@/styled-components';

export const Grid = styled.section`
  width: 100%;
  height: 50rem;
  display: flex;
  justify-content: space-between;

  & .image-container {
    height: 25rem;
    width: 32%;
    border-radius: 5px;
    overflow: hidden;

    & .row {
      display: flex;
      width: 100%;
      height: 100%;

      & .content {
        align-self: center;

        & .title {
          color: #fff;
          font-size: 26px;
          margin-bottom: 1rem;
        }
      }
    }

    &:first-child {
      background-color: ${props => props.theme.crimsonColor};
    }

    &:nth-child(2) {
      background-color: ${props => props.theme.purpleColor};
    }

    &:last-child {
      background-color: ${props => props.theme.orangeColor};
    }
  }

  & .discount-image {
    width: 60%;
    height: 100%;
    object-fit: cover;
    scale: 1;
    transition: 0.2s ease-in all;

    &:hover {
      scale: 1.2;
    }
  }
`;

export const CustomButton = styled(Button)`
  /* color: transparent; */
  background-color: #fff;
  font-weight: 500;
  font-size: 1.8rem;
  color: ${props => props.color};
`;

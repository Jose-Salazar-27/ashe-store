import styled, { createGlobalStyle } from 'styled-components';

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${props => props.theme.secondBackgroundColor};
  margin-bottom: 4rem;

  & .filter-title {
    font-size: 2.6rem;
    font-weight: 400;
    letter-spacing: 0.3px;
    vertical-align: middle;
    text-transform: capitalize;
  }

  & .tabs-container {
    display: flex;
    gap: 3rem;

    & .filter-tab {
      /* width: 10rem; */
      margin: 0 25px;
      display: inline-block;
      vertical-align: middle;
      position: relative;
      transition: 300ms ease-in-out all;

      & .filter-button {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 1.4rem;
        letter-spacing: 0.5px;
        background-color: ${props => props.theme.backgroundColor};
        color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        transition: 300ms ease-in-out all;
      }
    }

    & .filter-active {
      color: ${props => props.theme.fontColor};
      transition: 300ms ease-in-out all;

      & .filter-button {
        color: #000;
        font-weight: 500;
      }

      &::before {
        content: '';
        position: absolute;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme.primaryColor};
        transition: 300ms ease-in-out all;
      }
    }
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  overflow: hidden;
  min-height: 35rem;
  max-height: 35rem;
`;

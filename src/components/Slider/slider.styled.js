import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 100%;

  & .tabs-container {
    display: flex;
    gap: 3rem;

    & .filter-tab {
      width: 10rem;
    }

    & .active {
      background-color: red;
    }
  }
`;

export const SliderContainer = styled.div`
  display: grid;
  grid-auto-flow: column; /* this rule place the elements in a single row and and distributes them in columns */
  grid-template-columns: minmax(40rem, 100%);
  max-width: 1230px;
  overflow: hidden;
`;

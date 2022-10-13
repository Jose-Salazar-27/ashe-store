import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & .search-bar {
    background-color: ${props => props.theme.gray};
  }
`;

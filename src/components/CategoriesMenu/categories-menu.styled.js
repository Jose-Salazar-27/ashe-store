// External libraires dependencies
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components
import { Button } from '@/styled-components';

export const MenuContainer = styled.aside`
  height: 77rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & .menu-header {
    width: 100%;
    height: 5rem;
    border-radius: 5px;
    background-color: ${props => props.theme.primaryColor};
    color: ${prop => (prop.theme.type === 'light' ? '#fff' : '#000')};
    text-align: center;
    place-content: center;

    & .menu-title {
      padding-top: 1.5rem;
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 2px;
    }
  }

  & .menu-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 20rem;
    border: 2px solid ${props => props.theme.secondBackgroundColor};
    border-radius: 5px;
    justify-content: space-between;
    padding: 1rem;
  }

  & .open {
    /* gap: 0; */
    height: calc(100% - 6rem);
  }
`;

export const MenuLink = styled(Link)`
  font-size: 1.8rem;
  color: ${props => props.theme.fontColor};
`;

export const MenuButton = styled(Button)`
  width: 100%;
  background-color: transparent;
  color: ${props => props.theme.fontColor};
`;

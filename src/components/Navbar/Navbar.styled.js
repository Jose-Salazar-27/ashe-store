import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  border-bottom: 2px solid ${props => props.theme.secondBackgroundColor};

  & .logo-container {
    height: 100%;
    width: 10rem;

    & .logo {
      font-size: 14px;
      width: 100%;
      height: 100%;
      padding: 20% 20%;
      object-fit: contain;
    }
  }

  & .search-bar {
    display: flex;
    align-items: center;
    height: 2.8rem;
    position: relative;
    background-color: ${props => props.theme.secondBackgroundColor};
    color: ${props => props.theme.gray};
    border-radius: 5px;
  }

  & .search-select {
    height: 2.5rem;
    font-family: ${props => props.theme.fontFamiy};
    background-color: ${props => props.theme.secondBackgroundColor};
    display: inline-block;
    width: 9rem;
    color: ${props => props.theme.gray};
  }

  &.option {
    font-family: ${props => props.theme.fontFamiy};
    color: ${props => props.theme.secondBackgroundColor};
  }

  & .input {
    height: 2.5rem;
    width: 20rem;
  }

  & .button {
    height: 100%;
    width: 6rem;
    border-radius: 0 5px 5px 0;
  }

  & .user-options {
    display: flex;
    justify-content: space-between;
    width: 15rem;

    & a {
      color: ${props => (props.theme.type === 'light' ? props.theme.gray : '#fff')};
      display: flex;
      align-items: center;
    }
  }
`;

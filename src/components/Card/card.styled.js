import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardLayout = styled.article`
  min-height: 35rem;
  /* max-height: 100%; */
  min-width: 25rem;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  & .card-img-container {
    height: 60%;
    width: 100%;
    margin-bottom: 1rem;
  }

  & .card-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  & .card-body {
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .card-rating {
      font-size: 1.2rem;
    }
  }
`;

export const CustomNavLink = styled(NavLink)`
  font-size: 1.6rem;
  text-transform: capitalize;
  letter-spacing: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0 0 8px;
  font-weight: 400;

  &:visited {
    color: currentColor;
  }

  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`;

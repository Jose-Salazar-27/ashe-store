import styled from 'styled-components';

export const ArrowButton = styled.button`
  border: 2px solid ${props => props.theme.secondBackgroundColor};
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.backgroundColor};
  display: inline-block;
  text-align: center;
  font-size: 2rem;
  transition: 0.3s ease;
  opacity: 1;
  transform: unset;
  /* top: -78px; */
  min-width: 32px;
  min-height: 32px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.primaryColor};
    color: #fff;
    border: none;
  }
`;

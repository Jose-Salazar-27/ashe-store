import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.primaryColor};
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  font-family: ${props => props.theme.fontFamily};
  border-radius: 5px;
  font-weight: 400;
  width: 3rem;
  height: 2.5rem;
  cursor: pointer;
`;

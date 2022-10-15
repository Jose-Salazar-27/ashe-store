import styled from 'styled-components';

export const Input = styled.input`
  background-color: ${props => props.theme.secondBackgroundColor};
  color: ${props => props.theme.gray};
  font-family: ${props => props.theme.fontFamily};
`;

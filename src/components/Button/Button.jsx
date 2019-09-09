import styled from 'styled-components';

const Button = styled.button`
  color: red;
  cursor: pointer;
  transition: all 0.25s;
  border: none;
  &:hover {
    color: yellow;
  }
  &:disabled{
    color: grey;
    cursor: not-allowed;
  }
`;
/** @component */
export default Button;

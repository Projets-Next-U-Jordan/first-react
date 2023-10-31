import styled from '@emotion/styled'

const Button = styled.button<{isDisabled?: boolean}>`
  opacity: ${({isDisabled}) => (isDisabled? 0.5 : 1)};
  user-select: ${({isDisabled}) => (isDisabled ? 'none' : 'initial')};
  cursor: ${({isDisabled}) => (isDisabled? 'unset' : 'pointer')};
  color: ${({isDisabled}) => (isDisabled ? 'red' : 'pointer')};
  border: none;
`;

export default Button;
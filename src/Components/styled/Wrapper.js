import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ isFlipped }) => (isFlipped ? '' : 'hotpink')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  font-size: 60px;
`;

export { Wrapper };

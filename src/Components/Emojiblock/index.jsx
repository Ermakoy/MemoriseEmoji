import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmojiCard = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default EmojiCard;

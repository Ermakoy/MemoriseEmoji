import React from 'react';
import { Wrapper } from '../styled';

const FlipCard = ({ isFlipped, emoji, cover, ...rest }) => (
  <Wrapper {...{ ...rest, isFlipped }}>{isFlipped ? emoji : cover}</Wrapper>
);

export { FlipCard };

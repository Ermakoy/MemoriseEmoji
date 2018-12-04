import React, { memo } from 'react';
import { Box } from '@smooth-ui/core-sc';

const Card = ({ isFlipped, emoji, cover, ...rest }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    backgroundColor={isFlipped ? 'transparent' : 'hotpink'}
    height={100}
    m={2}
    {...rest}
  >
    {isFlipped && emoji}
  </Box>
);

const FlipCard = memo(
  Card,
  (prevProps, nextProps) =>
    prevProps.isFlipped === nextProps.isFlipped &&
    prevProps.disabled === nextProps.disabled
);

export { FlipCard };

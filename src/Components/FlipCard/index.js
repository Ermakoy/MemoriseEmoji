import React from 'react';
import { Box } from '@smooth-ui/core-sc';

const FlipCard = ({ isFlipped, emoji, cover, ...rest }) => (
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

export { FlipCard };

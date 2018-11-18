import React from 'react';
import ReactCardFlip from 'react-card-flip';
import CardBack from '../CardBack/CardBack';

const FlipCard = ({ isFlipped, children, ...rest }) => (
  <ReactCardFlip isFlipped={isFlipped}>
    <CardBack {...rest} key="front" />
    {React.cloneElement(children, { key: 'back', ...rest })}
  </ReactCardFlip>
);

export default FlipCard;

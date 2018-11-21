import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const randomEmoji = require('random-emoji');

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ isFlipped }) => (isFlipped ? '' : 'hotpink')};
  cursor: pointer;

  font-size: 60px;
`;

const FlipCard = ({ isFlipped, emoji, cover, ...rest }) => (
  <Wrapper {...{ ...rest, isFlipped }}>{isFlipped ? emoji : cover}</Wrapper>
);

const AppWrapper = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  width: 55vh;
  height: 55vh;
  display: grid;

  grid-column-gap: 5vh;
  grid-row-gap: 5vw;

  grid-template-columns: repeat(${({ colNumber }) => colNumber || 1}, 1fr);
  grid-template-rows: repeat(${({ rowNumber }) => rowNumber || 1}, 1fr);
`;

const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

function getInitialEmoji() {
  const emojiArray = randomEmoji.random({ count: 8 });
  return shuffleArray([...emojiArray, ...emojiArray]);
}

const emoji = getInitialEmoji();

const emojiPairs = emoji.reduce((acc, nextEmoji, index) => {
  acc[nextEmoji.name] = acc[nextEmoji.name]
    ? [...acc[nextEmoji.name], index]
    : [index];

  return acc;
}, {});

const App = props => {
  console.log(emoji, emojiPairs);
  const [opened, setOpened] = useState(Array(16).fill(false));
  const [disabledCards, setDisabled] = useState(Array(16).fill(false));

  const flipCard = index =>
    useCallback(
      () =>
        setOpened(oldOpened => {
          const newOpened = [...oldOpened];
          newOpened.splice(index, 1, !newOpened[index]);

          return newOpened;
        }),
      [index]
    );

  return (
    <AppWrapper>
      <Grid colNumber={4} rowNumber={4}>
        {emoji.map(({ character }, index) => (
          <FlipCard
            isFlipped={opened[index]}
            emoji={character}
            onClick={flipCard(index)}
          />
        ))}
      </Grid>
    </AppWrapper>
  );
};

export default App;

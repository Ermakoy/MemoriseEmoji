import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

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

const randomEmoji = require('random-emoji');

const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

function getInitialEmoji() {
  const emojiArray = randomEmoji.random({ count: 8 });
  return shuffleArray([...emojiArray, ...emojiArray]);
}

const App = props => {
  const [state, setState] = useState({
    emoji: getInitialEmoji(),
    opened: Array(16).fill(false),
  });

  console.log(state);

  const flipCard = index =>
    useCallback(
      () =>
        setState(oldState => {
          const newOpened = [...oldState.opened];
          newOpened.splice(index, 1, !newOpened[index]);

          return { ...oldState, opened: newOpened };
        }),
      [index]
    );

  return (
    <AppWrapper>
      <Grid colNumber={4} rowNumber={4}>
        {state.emoji.map(({ character }, index) => (
          <FlipCard
            isFlipped={state.opened[index]}
            emoji={character}
            onClick={flipCard(index)}
          />
        ))}
      </Grid>
    </AppWrapper>
  );
};

export default App;

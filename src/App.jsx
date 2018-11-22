import React, { useCallback } from 'react';
import { useImmer } from 'use-immer';

import { Grid, AppWrapper } from './Components/styled';
import { FlipCard } from './Components/FlipCard';

import { getInitialEmoji } from './utils';

const emoji = getInitialEmoji();

const emojiPairs = emoji.reduce((acc, nextEmoji, index) => {
  acc[nextEmoji.name] = acc[nextEmoji.name]
    ? [...acc[nextEmoji.name], index]
    : [index];

  return acc;
}, {});

const App = props => {
  const [opened, setOpened] = useImmer(Array(16).fill(false));
  const [disabledCards, setDisabled] = useImmer(Array(16).fill(false));

  const flipCard = index =>
    useCallback(
      () =>
        setOpened(draftOpened => {
          draftOpened[index] = !draftOpened[index];
        }),
      [index]
    );

  const switchDisabled = index =>
    useCallback(
      () =>
        setDisabled(draftDisabeled => {
          draftDisabeled[index] = !draftDisabeled[index];
        }),
      [index]
    );

  return (
    <AppWrapper>
      <Grid colNumber={4} rowNumber={4}>
        {emoji.map(({ character }, index) => {
          const isCardDisabled = disabledCards[index];

          return (
            <FlipCard
              isFlipped={opened[index]}
              emoji={character}
              onClick={isCardDisabled ? () => {} : flipCard(index)}
              disabled={isCardDisabled}
            />
          );
        })}
      </Grid>
    </AppWrapper>
  );
};

export default App;

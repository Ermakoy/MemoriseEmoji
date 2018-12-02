import React, { useCallback } from 'react';
import { Row, Col, Grid } from '@smooth-ui/core-sc';
import { useImmer } from 'use-immer';

import { AppWrapper } from './Components/styled';
import { FlipCard } from './Components/FlipCard';

import { getInitialEmoji, chunk } from './utils';

const emoji = getInitialEmoji();

const rows = chunk(
  emoji.map((emojiObj, index) => ({
    ...emojiObj,
    index,
  })),
  4
);

const emojiPairs = emoji.reduce((acc, nextEmoji, index) => {
  acc[nextEmoji.name] = acc[nextEmoji.name]
    ? [...acc[nextEmoji.name], index]
    : [index];

  return acc;
}, {});

const getInitialOpened = count => Array(count).fill(false);

const App = props => {
  const [opened, setOpened] = useImmer(getInitialOpened());
  const [disabledCards, setDisabled] = useImmer(Array(16).fill(false));

  const isMoreThanOneOpened =
    opened.filter(isCardOpened => !!isCardOpened).length > 1;

  const switchDisabled = index =>
    useCallback(
      () =>
        setDisabled(draftDisabeled => {
          draftDisabeled[index] = !draftDisabeled[index];
        }),
      [index]
    );

  const flipCard = index =>
    useCallback(
      () =>
        setOpened(
          draftOpened => {
            draftOpened[index] = !draftOpened[index];
          },
          isMoreThanOneOpened ? () => {} : () => switchDisabled(index)
        ),
      [index, isMoreThanOneOpened]
    );

  console.log(disabledCards, opened);

  return (
    <AppWrapper>
      <Grid fluid>
        {rows.map(col => (
          <Row>
            {col.map(({ character, index }) => {
              const isCardDisabled = disabledCards[index];

              return (
                <Col>
                  <FlipCard
                    key={index}
                    isFlipped={opened[index]}
                    emoji={character}
                    onClick={isCardDisabled ? () => {} : flipCard(index)}
                    disabled={isCardDisabled}
                  />
                </Col>
              );
            })}
          </Row>
        ))}
      </Grid>
    </AppWrapper>
  );
};

export default App;

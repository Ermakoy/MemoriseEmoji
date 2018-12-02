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
  acc[nextEmoji.character] = acc[nextEmoji.character]
    ? [...acc[nextEmoji.character], index]
    : [index];

  return acc;
}, {});

const getInitialOpened = (count = 16) => Array(count).fill(false);

const App = props => {
  const [opened, setOpened] = useImmer(getInitialOpened());
  const [disabledCards, setDisabled] = useImmer(getInitialOpened());

  const isMoreThanOneOpened = opened.filter(Boolean).length > 1;

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
        setOpened(draftOpened => {
          draftOpened[index] = !draftOpened[index];
        }),
      [index]
    );

  return (
    <AppWrapper>
      <Grid fluid>
        {rows.map(col => (
          <Row>
            {col.map(({ character, index }) => {
              const isCardDisabled = disabledCards[index];
              const flipCurrentCard = flipCard(index);
              const disableCurrentCard = switchDisabled(index);

              return (
                <Col>
                  <FlipCard
                    key={index}
                    isFlipped={opened[index]}
                    emoji={character}
                    disabled={isCardDisabled}
                    onClick={() =>
                      isCardDisabled
                        ? {}
                        : Promise.resolve()
                            .then(flipCurrentCard)
                            .then(
                              isMoreThanOneOpened
                                ? () => {}
                                : disableCurrentCard
                            )
                    }
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

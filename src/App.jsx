import React, { useCallback, useEffect } from 'react';
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

const getInitialOpened = Array(16).fill(false); // (count = 16) => Array(count).fill(false);

const App = props => {
  const [opened, setOpened] = useImmer(getInitialOpened);
  const [openedDraft, setDraft] = useImmer([]);
  const [disabledCards, setDisabled] = useImmer(getInitialOpened);

  const isMoreThanOneOpened = openedDraft.length > 1;

  const switchDisabled = index =>
    useCallback(
      () =>
        setDisabled(draftDisabled => {
          draftDisabled[index] = !draftDisabled[index];
        }),
      [index]
    );

  const flipCard = index =>
    useCallback(
      () => {
        setDraft(draftOpened => {
          draftOpened.push(index);
        });
        setDisabled(draftDisabled => {
          draftDisabled[index] = !draftDisabled[index];
        });
      },
      [index]
    );

  useEffect(
    () => {
      if (!isMoreThanOneOpened) {
        return;
      }

      const uniqueEmoji = [
        ...new Set(openedDraft.map(index => emoji[index].character)),
      ];

      if (uniqueEmoji.length === 1) {
        alert('congrats');

        openedDraft.forEach(index => {
          setOpened(draft => {
            draft[index] = true;
          });
        });
      } else {
        alert('Not this time :C');

        openedDraft.forEach(index => {
          setOpened(draft => {
            draft[index] = false;
          });

          setDisabled(draft => {
            draft[index] = false;
          });
        });
      }

      setDraft(() => []);
    },
    [isMoreThanOneOpened]
  );

  return (
    <AppWrapper>
      <Grid fluid>
        {rows.map(col => (
          <Row>
            {col.map(({ character, index }) => {
              const isCardFlipped =
                opened[index] ||
                openedDraft.find(openedIndex => openedIndex === index) !==
                  undefined;
              const isCardDisabled = disabledCards[index];
              const flipCurrentCard = flipCard(index);
              return (
                <Col>
                  <FlipCard
                    key={index}
                    isFlipped={isCardFlipped}
                    emoji={character}
                    disabled={isCardDisabled}
                    onClick={isCardDisabled ? () => ({}) : flipCurrentCard}
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

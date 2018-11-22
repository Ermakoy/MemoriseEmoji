const randomEmoji = require('random-emoji');

const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

function getInitialEmoji(count = 8) {
  const emojiArray = randomEmoji.random({ count });
  return shuffleArray([...emojiArray, ...emojiArray]);
}

export { getInitialEmoji };

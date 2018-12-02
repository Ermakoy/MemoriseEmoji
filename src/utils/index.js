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

function chunk(array, size) {
  if (!array) return [];

  const firstChunk = array.slice(0, size);

  if (!firstChunk.length) {
    return array;
  }
  return [firstChunk].concat(chunk(array.slice(size, array.length), size));
}

export { getInitialEmoji, chunk };

import React, {Component} from 'react';

import './grid.css';
import './App.css';
import FlipBlock from "./Components/FlipBlock/FlipBlock";

const randomEmoji = require('random-emoji');

const shuffleArray = arr => (
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])
);

class App extends Component {
  constructor() {
    super();
    let emojiArray = randomEmoji.random({count: 8});
    emojiArray = shuffleArray(emojiArray.concat(emojiArray));

    this.state = {
      emojiArray: emojiArray,
      opened: []
    };
  }

  render() {
    return (
      <div className="app">
        <div className="grid__col grid__col--centered">
          {[...Array(16)].map((x, i) =>
            <FlipBlock key={i} emoji={this.state.emojiArray[i]}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;

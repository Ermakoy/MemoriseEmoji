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

  checker = () => {
    let firstIndex = this.state.opened[0];
    let secondIndex = this.state.opened[1];
    if (this.state.opened.length === 2) {
      setTimeout(() => {
        alert(this.state.emojiArray[firstIndex].character === this.state.emojiArray[secondIndex] ? 'Correct!' : 'Sorry, no!')
      }, 500);
    }
  };
  addOpened = index => {
    let newOpened = this.state.opened;
    newOpened.push(index);
    this.setState({opened: newOpened});
    this.checker();
  };
  removeOpened = index => {
    let newOpened = this.state.opened;
    newOpened.splice(newOpened.indexOf(index), 1);
    this.setState({opened: newOpened});
  };

  render() {
    return (
      <div className="app">
        <div className="grid__col grid__col--centered">
          {[...Array(16)].map((x, i) =>
            <FlipBlock key={i} arrayKey={i} emoji={this.state.emojiArray[i]}
                       addOpened={this.addOpened}
                       removeOpened={this.removeOpened}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import '../../grid.css';
import './Emojiblock.css';

class Emojiblock extends Component {
  render() {
    return (
      <div className="grid__col grid__col--1-of-4">
        <span role="img">🤔</span>
      </div>
    );
  }
}

export default Emojiblock;

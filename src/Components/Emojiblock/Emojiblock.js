import React, {Component} from 'react';
import '../../grid.css';
import './Emojiblock.css';

class Emojiblock extends Component {
  render() {
    return (
      <div className="EmojiBlock">
        <span role="img" className="emoji">{this.props.emoji.character}</span>
      </div>
    );
  }
}

export default Emojiblock;

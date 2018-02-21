import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import Emojiblock from '../Emojiblock/Emojiblock';
import CardBack from '../CardBack/CardBack';
import './FlipBlock.css';

class FlipBlock extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
  }

  handleClick = (key) => {
    this.setState({isFlipped: !this.state.isFlipped});
    if (!this.state.isFlipped) {
      this.props.addOpened(key);
    } else {
      this.props.removeOpened(key);
    }
  };


  render() {
    return (
      <div className="flipBlock grid__col grid__col--1-of-4" onClick={() => {
        this.handleClick(this.props.arrayKey)
      }}>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <CardBack key="front"/>
          <Emojiblock key="back" emoji={this.props.emoji}/>
        </ReactCardFlip>
      </div>
    );
  }

}

export default FlipBlock;
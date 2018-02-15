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

  handleClick = (e) => {
    this.setState({isFlipped: !this.state.isFlipped});
  };


  render() {
    return (
      <div className="flipBlock grid__col grid__col--1-of-4" onClick={() => {this.handleClick();}}>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <CardBack key="front"/>
          <Emojiblock key="back"/>
        </ReactCardFlip>
      </div>
    );
  }

}

export default FlipBlock;
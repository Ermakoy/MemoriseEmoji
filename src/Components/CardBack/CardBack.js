import React, {Component} from 'react';
import img from  '../../img/back282.gif';

class CardBack extends Component {

  render() {
    return (
      <div className="CardBack">
        <img src={img} alt="Card back" height="42" width="42" />
      </div>
    );
  }

}

export default CardBack;
import React, {Component} from 'react';
import img from '../../img/tuz.jpg';

class CardBack extends Component {

  render() {
    return (
      <div className="CardBack">
          <img src={img} alt="Card back" className="grid__col--8-of-8 grid__col grid__col--centered"/>
      </div>
    );
  }

}

export default CardBack;
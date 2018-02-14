import React, {Component} from 'react';
import Emojiblock from './Components/Emojiblock/Emojiblock';
import './grid.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="grid__col grid__col--centered">
        {[...Array(16)].map((x, i) =>
          <Emojiblock key={i} />
        )}
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

import './grid.css';
import './App.css';
import FlipBlock from "./Components/FlipBlock/FlipBlock";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="grid__col grid__col--centered">
          {[...Array(16)].map((x, i) =>
            <FlipBlock key={i} ref={instance => {
              this.child = instance;
            }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;

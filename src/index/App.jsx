import React, {Component} from 'react';
import Game from '../components/game/index';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Game />
      </React.Fragment>
    );
  }
}

export default App;

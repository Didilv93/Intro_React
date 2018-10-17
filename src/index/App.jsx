import React, {Component} from 'react';
// import Game from '../components/game/index';
import './styles/App.css';

class App extends Component {
  render() {
    const list = {
      name : ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', ],
      idade : [10,20,30,40]
    }
    const teste = list.name.map((name, i) => <li>{'nome: ' + name + ' idade: '+ list.idade[i]}</li>);
    return (
      <React.Fragment>
        {/* <Game /> */}
        {teste}
      </React.Fragment>
    );
  }
}

export default App;

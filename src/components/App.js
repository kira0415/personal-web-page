import React, {Component} from 'react'
import Menu from './Menu'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left">
          <Menu />
        </div>
        <div className="right">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;

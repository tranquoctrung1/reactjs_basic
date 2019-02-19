import React, { Component } from 'react';
import './App.sass';
import './header';
import Header from './header';

/////////// Header ///////////
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header/>
        </header>
      </div>
    );
  }
}

export default App;

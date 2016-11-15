import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {

  loadFlask() {
    fetch('http://127.0.0.1:5000/api')
    .then(result=> {
      console.log(result.text)
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started with this app, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.loadFlask}>Hlo</button>
      </div>
    );
  }
}

export default App;

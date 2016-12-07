import React, { Component } from 'react';
import {Button, IconButton} from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';


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
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started with this app, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button label='Bookmark' raised primary />
        <ProgressBar type="linear" mode="determinate" value={83} buffer={90} />
      </div>
    );
  }
}

export default App;

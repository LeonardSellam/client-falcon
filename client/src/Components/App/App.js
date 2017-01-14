import React, { Component } from 'react';
import {Button, IconButton} from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Button label='Bookmark' raised primary />
        <ProgressBar type="linear" mode="determinate" value={83} buffer={90} />
      </div>
    );
  }
}





export default App;

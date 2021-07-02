import React, { Component } from 'react';
import './App.css';

import Articles from './components/Articles';
import ReduxLearn from './components/ReduxLearn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReduxLearn />
      </div>
    );
  }
}

export default App;

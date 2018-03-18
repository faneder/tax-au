import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TaxContainer from './TaxContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TAX RETURN</h1>
        </header>
        <TaxContainer />
      </div>
    );
  }
}

export default App;

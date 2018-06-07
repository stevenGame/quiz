import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Quiz'
import Quiz from './components/Quiz';
class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Quiz />
      </div>
    );
  }
}

export default App;

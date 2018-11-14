import React, { Component } from 'react';
import Router from './router'
import './App.css';
import Connection_Form from './Components/Connexion'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Router from './router/router'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      isConnect: false
    }
  }

  render() {
    return (
      <div className="App">
        <Router isConnect={this.state.isConnect}/>
      </div>
    );
  }
}

export default App;

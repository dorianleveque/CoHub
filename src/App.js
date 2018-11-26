import React, { Component } from 'react';
import Router from './router/router';
import { SessionStore } from './stores';
import Authentification from './classes/Authentification';

class App extends Component {
  constructor(){
    super();
    this.state = {
      displayApp: false,
      auth: new Authentification()
    };
  }

  componentDidMount() {
    // Lorsque la session est prête, on affiche notre application
    let a = this.state.auth.onAuthStateChanged(() => {
      this.setState({ displayApp: true })
    })
  }

  /**
   * La fonction render de App, affiche le router
   * lorsque la session est prête, sinon une page blanche
   */
  render() {
    let router = (this.state.displayApp) 
                    ? <Router authUser={this.state.session}/>
                    : null
		  return (
      <div className="App">
        <SessionStore.Provider value={this.state.auth} >
          {router}
        </SessionStore.Provider>
      </div>
    );
  }
}

export default App;

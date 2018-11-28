import React, { Component } from 'react';
import Router from './router/router'
import { SessionStore } from './stores/session-store'
import Session from './classes/Session';

class App extends Component {
  constructor(){
    super()
    this.state = {
      displayApp: false,
      session: new Session()
    }
  }

  componentDidMount() {
    // Lorsque la session est prête, on affiche notre application
    this.state.session.whenSessionReady(() => {
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
        <SessionStore.Provider value={this.state.session} >
          {router}
        </SessionStore.Provider>
      </div>
    );
  }
}

export default App;

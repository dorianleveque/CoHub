import React, { Component, Layout , Header } from 'react';
import Top from './Top'

class App extends Component {
  render() {
    return (
      <div className="App">
	    
	    <Layout>   // mettre sider dans top pour ham erger ?
        		<Sider_menu ismenu={true}  />
		<Sider_menu ismenu =	
	    	<Layout>
        		<Top ismenu={true}  />
	    	</Layout>
	    </Layout>

      </div>
    );
  }
}

export default App;

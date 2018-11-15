import React, { Component } from 'react';
import {Layout , Col ,Row , Pagination} from 'antd'
import Top from './Top'
import Sider_menu from  './Sider_menu'
import Demande_card from  './Demande_card';
const { Content } = Layout;

class App extends Component {

	// add a function to create the demande_card ( with props for data)
  render() {
    return (
      <div className="App">
	    <Layout style={{height:"100vh"}}> 
				< Sider_menu/>  
	    	<Layout>
        		<Top ismenu={true} />
						<Content>
							<Row>
								<br/>
							</Row>
						<Row>
									<Demande_card/> 
									<Demande_card/> 
									<Demande_card/> 
								</Row>
							<Row>
								<br/>
							</Row>
						<Row>
									<Demande_card/> 
									<Demande_card/> 
									<Demande_card/> 
								</Row>
							<Row>
								<br/>
							</Row>
						<Row>
									<Demande_card/> 
									<Demande_card/> 
									<Demande_card/> 
								</Row>
							<Row>
								<br/>
							</Row>
							<Row>
								<Col offset={10}> <Pagination defaultCurrent={1} total={50} />   </Col>					
							</Row>
						</Content>
	    	</Layout>
	    </Layout>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {Layout , Col ,Row , Pagination} from 'antd'
import Top from './Top'
import Sider_menu from  './Sider_menu'
import Demande_card from  './Demande_card';
const { Content } = Layout;

class App extends Component {
constructor(props) { // constructuer de Top
		
		super(props); 
		this.ismenu = true;
		this.state = {visible : true}
				}


		togleSideBar = () => {
			if (this.state.visible=== true) {
			this.setState({ 
				visible : false 
			}, console.log("1"));
		}

			else {

			this.setState ({
				visible : true 
			},console.log("2"));
		}

		}
  render() {

		let cards ;
		let space ;
		let pagination;
		cards = <Row><Demande_card/> <Demande_card/> <Demande_card/> </Row>;
		space = <Row><br/></Row>;
		pagination = <Row><Col offset={10}> <Pagination defaultCurrent={1} total={50} />  </Col></Row>;				

    return (
      <div className="App">
	    <Layout style={{height:"100vh"}}> 
				< Sider_menu {...this.state} />  
	    	<Layout>
        		<Top ismenu={this.ismenu} togleSideBar ={this.togleSideBar}/>
						<Content>
								{space}
								{cards}
								{space}
								{cards}
								{space}
								{cards}
								{space}
								{pagination}
						</Content>
	    	</Layout>
	    </Layout>

      </div>
    );
  }
}

export default App;

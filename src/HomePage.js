import React, { Component } from 'react';
import {Layout , Col ,Row , Pagination} from 'antd'
import Top from './Top'
import Sider_menu from  './Sider_menu'
import Demande_card from  './Demande_card';
const { Content } = Layout;

class HomePage extends Component {
constructor(props) { // constructuer de Top
		
		super(props); 
		this.ismenu = true;
		this.state = {visible : true , width: window.innerWidth,}
				}



componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
}

// make sure to remove the listener
// when the component is not mounted anymore
componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
};

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

		const { width } = this.state;
  		const isMobile = width <= 500;

		let cards ;
		let space ;
		let pagination;
	  	let centeredCard;
	  	centeredCard = <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>  <Demande_card/> </div>;
		space = <Row><br/></Row>;
	  	if (isMobile){
		cards = <div>{space}<Row> {centeredCard} </Row>{space}<Row> {centeredCard} </Row>{space}<Row>  </Row>{space}<Row> {centeredCard} </Row>{space}<Row> {centeredCard}  </Row></div>;
		}
	  	else  {
		cards =<div>{space}<Row><Demande_card/> <Demande_card/> <Demande_card/> </Row>{space}<Row><Demande_card/> <Demande_card/> <Demande_card/> </Row>{space}<Row><Demande_card/> <Demande_card/> <Demande_card/> </Row></div>;
		}
		pagination = <Row> <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>     <Pagination defaultCurrent={1} total={50} />  </div> </Row>;				
    return (
      <div className="App">
	    <Layout style={{height:"100vh"}}> 
				< Sider_menu {...this.state} />  
	    	<Layout>
        		<Top ismenu={this.ismenu} togleSideBar ={this.togleSideBar}/>
						<Content>
								{cards}
								{space}
								{pagination}
								{space}
						</Content>
	    	</Layout>
	    </Layout>

      </div>
    );
  }
}

export default HomePage;

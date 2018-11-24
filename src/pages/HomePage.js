import React, { Component } from 'react';
<<<<<<< HEAD
import { Layout, Col, Row, Pagination , Icon} from 'antd'
=======
import { Layout, Col, Row, Pagination } from 'antd'
>>>>>>> Master
import Top from '../components/Top'
import Sider_menu from '../components/SiderMenu'
import Demande_card from '../components/DemandeCard';
const { Content } = Layout;

class HomePage extends Component {
	constructor(props) { // constructuer de Top

		super(props);
		this.ismenu = true;
		const isDesktop =  window.innerWidth <= 500;
		this.state = { visible: isDesktop }

	}


	// make sure to remove the listener
	// when the component is not mounted anymore

	togleSideBar = () => {
		if (this.state.visible === true) {
			this.setState({
				visible: false
			}, console.log("1"));
		}
		else {
			this.setState({
				visible: true
			}, console.log("2"));
		}
	}
	render() {

		let cards;
		let space;
		let pagination;
		space = <Row><br /></Row>;
		cards = <ul style={{ display : 'flex' , flexWrap : 'wrap' ,alignContent: 'space-evenly', justifyContent:'space-evenly'}} ><Demande_card/><Demande_card/><Demande_card/><Demande_card/><Demande_card/><Demande_card/><Demande_card/><Demande_card/><Demande_card/><Demande_card/><Demande_card/><Demande_card/></ul>
		pagination = <Row> <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>     <Pagination defaultCurrent={1} total={50} />  </div> </Row>;
		return (
				<Layout style={{ height: "100vh" }}>
					< Sider_menu {...this.state} />
					<Layout>
						<Top ismenu={this.ismenu} togleSideBar={this.togleSideBar} />
						<Content>
							{cards}
							{space}
							{pagination}
							{space}
						</Content>
					</Layout>
				</Layout>
		);
	}
}

export default HomePage;

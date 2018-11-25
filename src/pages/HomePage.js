import React, { Component } from 'react';
import { Layout, Row, Pagination } from 'antd'
import Top from '../components/Top'
import Sider_menu from '../components/SiderMenu'
import Demande_card from '../components/DemandeCard';

import {NavLink} from 'react-router-dom'
import {DISPLAY_DEMAND, EDIT_DEMAND, applyRouteParams} from '../router/routes'
import { SessionStore } from '../stores/session-store';
const { Content } = Layout;

class HomePage extends Component {
	//static contextType = SessionStore

	constructor(props) { // constructuer de Top
		super(props);
		this.ismenu = true;
		this.state = { 
			visible: true,
			session: this.context
		}
	}

	togleSideBar = () => {
		if (this.state.visible === true) {
			this.setState({
				visible: false
			});
		}

		else {

			this.setState({
				visible: true
			});
		}

	}
	render() {

		const { width } = this.state;
		const isMobile = width <= 500;
		console.log(this.context)
		let cards;
		let space;
		let pagination;
		let centeredCard;
		centeredCard = <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>  <Demande_card /> </div>;
		space = <Row><br /></Row>;
		if (isMobile) {
			cards = <div>{space}<Row> {centeredCard} </Row>{space}<Row> {centeredCard} </Row>{space}<Row>  </Row>{space}<Row> {centeredCard} </Row>{space}<Row> {centeredCard}  </Row></div>;
		}
		else {
			cards = <div>{space}<Row><Demande_card /> <Demande_card /> <Demande_card /> </Row>{space}<Row><Demande_card /> <Demande_card /> <Demande_card /> </Row>{space}<Row><Demande_card /> <Demande_card /> <Demande_card /> </Row></div>;
		}
		pagination = <Row> <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>     <Pagination defaultCurrent={1} total={50} />  </div> </Row>;
		return (
				<Layout style={{ height: "100vh" }}>
					< Sider_menu {...this.state} />
					<Layout>
						<Top ismenu={this.ismenu} togleSideBar={this.togleSideBar} />
						<Content>
							<NavLink to={applyRouteParams(DISPLAY_DEMAND, {id:20})}>demande</NavLink><br/>
							<NavLink to={applyRouteParams(EDIT_DEMAND, {id:20})}>edit</NavLink>
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

HomePage.contextType = SessionStore

export default HomePage;

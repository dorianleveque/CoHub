import React, { Component } from 'react';
import { Layout, Row, Pagination } from 'antd'
import Top from '../components/Top'
import SiderMenu from '../components/SiderMenu'
import DemandeCard from '../components/DemandeCard';
import TicketListControler from '../classes/TicketListControleur'
import TicketCarPooling from "../classes/TicketCarPooling"
import User from "../classes/User"
import Ticket from '../classes/Ticket'
const { Content } = Layout;

class HomePage extends Component {

	constructor(props) { // constructuer de Top

		super(props);
		this.ismenu = true;
		const isDesktop =  window.innerWidth <= 500;

		this.state = { visible: isDesktop , 
			       cardsData :[],
				numberOfPages : 5
			      }

		this.tlc = new TicketListControler();	

		this.tlc.searchTickets(0).then((value) => {
			
			var tickets = value.tickets
			var pages  = value.pageCount
			this.setState({
				cardsData : [...this.state.cardsData,...tickets],
				numerOfPages : pages ,
			})//setState
		}) //Then searchTickets


	} //costructor




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

	onChange = (pageNumber) => {  //prblème de début du num de page TODO : Modification de la page

		this.tlc.searchTickets(pageNumber).then((value) => {

			this.changeCards(value);

		})
	}
	

	searchItems = (text) =>{
		console.log(this.tlc)
		this.tlc.searchTickets(0,20,null,text).then((value) => {
			this.changeCards(value);

		})
	}

	
	sortItems = (category) =>{

		this.tlc.searchTickets(0,20,category).then((value) => {
			this.changeCards(value);

		})
	}


	changeCards = (value) => {

			var tickets = value.tickets
			var pages  = value.pageCount
			this.setState({
				cardsData : [...tickets],// [...this.state.cardsData,...tickets],
				numerOfPages : pages ,
			})

	}


	Cards = () => {
		
		var values  = []
		this.state.cardsData.forEach(function(entry){
			values.push({ title : entry.getTitle()  , author : entry.getRequester() , description :entry.getDescription() , category : entry.getCategory() , key : entry.getId() , })
		});

		return values.map(item => {
			return (
				<DemandeCard args = {item} key ={item.key} />);
					});

	}

	render() {

		let cards;
		let space;
		let pagination;
	
		
		
	 	cards =  <ul style={{ display : 'flex' , flexWrap : 'wrap' ,alignContent: 'space-evenly', justifyContent:'space-evenly'}} >
			{this.Cards()}						
			</ul>
		
		
		
		space = <Row><br /></Row>;
		pagination = <Row> <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>     <Pagination defaultCurrent={1} total={this.state.numberOfPages} onChange={this.onChange.bind(this)}  />  </div> </Row>;
		
		
		return (
				<Layout style={{ height: "100vh" }}>
					< SiderMenu {...this.state.visible} />
					<Layout>
						<Top ismenu={this.ismenu} togleSideBar={this.togleSideBar} searchItems={this.searchItems} orderItems = {this.orderItems} />
						<Content>
							{cards}
							{space}
							{pagination}
							{space}
						</Content>
					</Layout>
				</Layout>
		);
	}}

export default HomePage;

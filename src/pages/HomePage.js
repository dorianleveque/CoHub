import React, { Component } from 'react';
import { Layout, Row, Pagination, Spin } from 'antd'
import Top from '../components/Top'
import SiderMenu from '../components/SiderMenu'
import DemandeCard from '../components/DemandeCard';
import TicketListControler from '../classes/TicketListControleur'
import Bottom from "../components/Bottom"
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
				cardsData : [...tickets],
				numerOfPages : pages ,
				params : []
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
//TODO TODO page number !!
	onChange = (pageNumber) => {  //prblème de début du num de page TODO : Modification de la page
		
			this.setState({
				cardsData : [],// [...this.state.cardsData,...tickets],
			})
		
		
		this.tlc.searchTickets(pageNumber,...this.state.params).then((value) => {

			this.changeCards(value); //add param in state

		})
	}
	

	searchItems = (text) =>{
			var parameters  = [20,null,text]
			this.setState({
				cardsData : [],// [...this.state.cardsData,...tickets],
				numerOfPages : 1 ,
				params :  parameters
			})

		this.tlc.searchTickets(0,...parameters).then((value) => {
			this.changeCards(value);

		})
	}

	
	sortItems = (category) =>{
			
			var parameters  = [20,category]

			this.setState({
				cardsData : [],// [...this.state.cardsData,...tickets],
				numerOfPages : 1 ,
				params :  parameters
			})
		this.tlc.searchTickets(0,...parameters).then((value) => {
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


		if (this.state.cardsData.length ==0){  //show loading when cards are empty
			return (<div><br/><br/><Spin size = "large"/><br/><br/></div>)
		}

		else {
		this.state.cardsData.forEach(function(entry){ //show tickets
			values.push({ title : entry.getTitle()  , author : entry.getRequester() , description :entry.getDescription() , category : entry.getCategory() , key : entry.getId() , })
		});

		return values.map(item => {
			return (
				<DemandeCard args = {item} key ={item.key} />);
					});
		}

	}

	render() {

		let cards;
		let space;
		let pagination;
	
		
		
	 	cards =  <ul style={{ display : 'flex' , flexWrap : 'wrap' ,alignContent: 'space-evenly', justifyContent:'space-evenly'}} >
			{this.Cards()}						
			</ul>
		
		
		
		space = <Row><br /></Row>;
		pagination = <Row> <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>     <Pagination defaultCurrent={1} total={this.state.numberOfPages*10} onChange={this.onChange.bind(this)}  />  </div> </Row>;
		
		
		return (
				<Layout style={{ height: "100vh" }}>
					< SiderMenu visible = {this.state.visible} sortItems ={this.sortItems} />
					<Layout>
						<Top ismenu={this.ismenu} togleSideBar={this.togleSideBar} searchItems={this.searchItems} orderItems = {this.orderItems} />
						<Content>
							{cards}
							{space}
							{pagination}
							{space}
						</Content>
						<Bottom/>
					</Layout>
				</Layout>
		);
	}}

export default HomePage;

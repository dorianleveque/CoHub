import React, { Component } from 'react';
import { Layout, Row, Pagination, Card, Skeleton } from 'antd'
import Top from '../components/Top'
import SiderMenu from '../components/SiderMenu'
import DemandeCard from '../components/DemandeCard';
import TicketListControler from '../classes/TicketListControleur'
import BoutonCreationDemande from '../components/boutons/BoutonCreationDemande'
import TicketCarPooling from "../classes/TicketCarPooling"
import User from "../classes/User"
import Ticket from '../classes/Ticket'
const { Content } = Layout;

class HomePage extends Component {

	constructor(props) { // constructuer de Top

		super(props);
		this.ismenu = true;
		const isDesktop =  window.innerWidth <= 500;

		var squelletonsCard = []
		for(var i=0; i<12; i++) {
			squelletonsCard.push(
				<Card style={{  margin: '0px 20px', marginTop: '40px', width: '250px', height: '120px' }} >
					<Skeleton loading active paragraph={{ rows: 3 }} title={false} ></Skeleton>
				</Card>)
		}

		this.state = { 
			visible: isDesktop , 
			cardsData :[],
			squelletonsCard: squelletonsCard,
			numberOfPages : 1
		}

		this.tlc = new TicketListControler();	

		this.tlc.searchTickets(0, 12).then((value) => {
			
			var tickets = value.tickets
			var pages  = value.pageCount
			console.log(pages)
			this.setState({
				cardsData : tickets,
				numberOfPages : pages ,
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
		this.setState({ cardsData: [] })

		this.tlc.searchTickets(pageNumber, 12).then((value) => {
			this.changeCards(value);

		})
	}
	

	searchItems = (text) =>{

		this.tlc.searchTickets(0,12,null,text).then((value) => {
			this.changeCards(value);

		})
	}

	
	sortItems = (category) =>{

		this.tlc.searchTickets(0,12,category).then((value) => {
			this.changeCards(value);

		})
	}


	changeCards = (value) => {

			var tickets = value.tickets
			var pages  = value.pageCount
			console.log(pages)
			this.setState({
				cardsData : tickets,
				numberOfPages : pages ,
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
	

		
	 	cards =  <div style={{ display : 'flex' , flexWrap : 'wrap' ,alignContent: 'space-evenly', justifyContent:'space-evenly' }} >
			{ 
				(this.state.cardsData.length > 0)
				? this.Cards()
				: this.state.squelletonsCard
			}			
			</div>
		
		
		
		space = <Row><br /></Row>;
		pagination = <Row> <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>     <Pagination defaultCurrent={1} total={this.state.numberOfPages} onChange={this.onChange.bind(this)}  />  </div> </Row>;
		
		
		return (
				<Layout style={{ height: "100vh" }}>
					< SiderMenu {...this.state} />
					<Layout>
						<Top ismenu={this.ismenu} togleSideBar={this.togleSideBar} sortItems={this.sortItems} orderItems = {this.orderItems} />
						<Content style={{ padding: "0 40px" }}>
							{cards}
							{space}
							{pagination}
							{space}
							<BoutonCreationDemande />
						</Content>
					</Layout>
				</Layout>
		);
	}}

export default HomePage;

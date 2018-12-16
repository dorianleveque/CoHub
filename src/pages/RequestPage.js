import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Top from '../components/Top';
import TicketListControleur from '../classes/TicketListControleur.js';
import { Input,Layout,Row, Col, Button, Cascader, Divider } from 'antd';
import { SessionStore } from '../stores';
import Chat from '../components/discussion/Chat.js';
import Bottom from '../components/Bottom';
import EditButton from '../components/boutons/BoutonEditer'
import DeleteButton from '../components/boutons/BoutonSupprimer'
import { HOME } from '../router/routes';

const { Content } = Layout;
const { TextArea } = Input

class Demande_Consultation  extends Component {
	static contextType = SessionStore
	constructor(props) {
		super(props);
		this.state = {
			ticket: null,
			isSharing: false,
			isStudy: false,
			isCarPooling: false,
			Categorie:"Tutorat",
			categorieOptions: [
				{value: 'Tutorat',label: 'Tutorat'},
				{value: 'Objet',label: "Prêt d'objet"},
				{value: 'Covoiturage',label: 'Covoiturage'}
			],
			conversation: null,
			ticGlobalInfo: {titre: null, categorie: null, description: null},
			ticSharingInfo: {objet: null},
			ticStudyInfo: {matiere:null, prof:null, theme:null, semestre: null},
			ticCarpoolingInfo: {arrivee:null, depart:null, arriveeTime:null, departTime:null, places:null},	
		}

		this.ticketRecup().then((value)=> {
			const cat = value.getCategory();
			const conversation = value.getConversation() 
			
			switch(String(cat)) {
			case "Study": 
				this.setState({
					ticket: value,
					isSharing: false, 
					isStudy: true, 
					isCarPooling: false, 
					Categorie: "Tutorat",
					conversation: conversation, 
					ticGlobalInfo:{ 
						titre: value.getTitle(),
						description:value.getDescription()
					},
					ticStudyInfo: {
						matiere:value.getSubject(), 
						prof:value.getTeacher(), 
						theme:value.getTheme(), 
						semestre:value.getSemester()
					}
				})
				break;
			case "Sharing":
				this.setState({
					ticket: value,
					isSharing: true,
					isStudy: false,
					isCarPooling: false,
					Categorie: "Objet",
					conversation: conversation, 
					ticGlobalInfo: {
						titre: value.getTitle(),
						description:value.getDescription()
					}, 
					ticSharingInfo: {
						objet: value.getItem()
					}
				})
				break;
			case "CarPooling":
				this.setState({
					ticket: value,
					isSharing: false,
					isStudy: false,
					isCarPooling: true,
					Categorie: "Covoiturage",
					conversation: conversation, 
					ticGlobalInfo: {
						titre: value.getTitle(),
						description: value.getDescription()
					},
					ticCarpoolingInfo: { 
						arrivee: value.getArrivalLocation(), 
						depart: value.getDeparturLocation(),
						arriveeTime: value.getArrivalTime(),
						departTime: value.getDeparturTime(),
						places: value.getPlaces()
					}
				})
				break;
			default:
				this.setState({
					ticket: value,
					isSharing: false,
					isStudy: false,
					isCarPooling: false,
					Categorie: "",
					conversation: conversation
				})
			}
		})
	}
	
	async ticketRecup() // Recupere le ticket en fonction de l'id envoyé dans l'url
	{
		const IdTicket= this.props.match.params.id ; //
		var tlc= new TicketListControleur;
		let ticket = await tlc.retriveTicket(IdTicket)
		return ticket
	}
	
	checkRights() {
		let ticket = this.state.ticket
		if (ticket) {
			let requester = ticket.getRequester()
			let currentUser = this.context.getCurrentUser()
			if (currentUser){
				return requester.checkRights(currentUser)
			}
			else {
				return false
			}
		}
		else {
			return false
		}
	}
	
	confirmDeleteTicket = (event) => {
		event.preventDefault()
		const history = this.props.history;
		const ticket = this.state.ticket
		ticket.delete()
		history.push(HOME);
	}
	
  render() {
	function h3PlusInput(colorH3,titreH3,valueInput,colorInput,ID="indefini") 
	{
		return 	<div>
					<h3 style= {{color:colorH3}}>{titreH3}</h3>
					<Input ref={ID} disabled defaultValue={valueInput} style={{color:colorInput}} id={ID}/>
				</div>;
	}
	
	let component = null;
	if(this.state.isStudy)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between' }} >
			{h3PlusInput('#7F7F7F',"Matiere",this.state.ticStudyInfo.matiere,'#42A6FB',"matiere")}
			{h3PlusInput('#7F7F7F',"Professeur",this.state.ticStudyInfo.prof,'#42A6FB',"prof")}
			{h3PlusInput('#7F7F7F',"Thème",this.state.ticStudyInfo.theme,'#42A6FB',"theme")}
			{h3PlusInput('#7F7F7F',"Semestre",this.state.ticStudyInfo.semestre,'#42A6FB',"semestre")}
		</div>
	}
	else if(this.state.isSharing)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between' }} >
			{h3PlusInput('#7F7F7F',"Objet",this.state.ticSharingInfo.objet,'#42A6FB',"objet")}
		</div>
	}
	else if(this.state.isCarPooling)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between' }} >
			{h3PlusInput('#7F7F7F',"Départ",this.state.ticCarpoolingInfo.depart,'#42A6FB',"depart")}
			{h3PlusInput('#7F7F7F',"Arrivée",this.state.ticCarpoolingInfo.arrivee,'#42A6FB',"arrivee")}
			{h3PlusInput('#7F7F7F',"Places",this.state.ticCarpoolingInfo.places,'#42A6FB',"places")}
			{h3PlusInput('#7F7F7F',"Date de départ",this.state.ticCarpoolingInfo.departTime,'#42A6FB',"depart_date")}
			{h3PlusInput('#7F7F7F',"Date d'arrivée",this.state.ticCarpoolingInfo.arriveeTime,'#42A6FB',"arrivee_date")}
		</div>
	}

	return (
	<Layout>
		<Top/>
		<Content style={{ margin: '42px 10%'}}>
			<Layout>
				<Row>
					<h1 style= {{color:'#7F7F7F'}}>DEMANDE</h1>
				</Row>
				<Row type="flex" justify="space-between"  style={{ textAlign:'center'}}>
					<div style={{ width: '600px'}}>
						{h3PlusInput('#7F7F7F',"Titre",this.state.ticGlobalInfo.titre,'#42A6FB','title')}
					</div>
					<div>
						<h3 style= {{color:'#7F7F7F'}}>Catégorie</h3>
						<Cascader options={this.state.categorieOptions}  value={[this.state.Categorie]} disabled style= {{color:'#42A6FB'}}/>
					</div>
				</Row>

				<div style={{ marginTop: 60 }} >
					{component}
				</div>
				<Divider style={{ margin: '30px 0' }} />
				<Row>
					<h3 style= {{color:'#7F7F7F'}}>Description</h3>
					<TextArea disabled style= {{color:'#42A6FB'}} value={this.state.ticGlobalInfo.description} />
				</Row>
				<Divider style={{ margin: '30px 0' }} />
				<Row>
					<h3 style= {{color:'#7F7F7F'}}>Conversation</h3>
					<Chat conversation={this.state.conversation} allowPublication={this.context.isConnected()} />
				</Row>

				<Row>
					<Col>
						<NavLink to={HOME} >
							<Button type="primary" >Retour</Button>
						</NavLink>
					</Col>
				</Row>
				{
					(this.checkRights())
					? <EditButton id={this.props.match.params.id} />
					: null
				}
				{
					(this.checkRights())
					? <DeleteButton onConfirm={this.confirmDeleteTicket} />
					: null
				}
			</Layout>
		</Content>
		<Bottom/>
	</Layout>
    );
  }
}

export default Demande_Consultation;

import React, { Component } from 'react';
import Top from '../components/Top'
import TicketListControleur from '../classes/TicketListControleur.js'
import { Ticket } from '../classes/Ticket.js'
import { TicketStudy } from '../classes/TicketStudy.js'
import { TicketSharing } from '../classes/TicketSharing.js'
import { TicketCarPooling } from '../classes/TicketCarPooling.js'
import { Input,Divider,Layout,Row, Col, Mention, Button, Cascader} from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { toString } = Mention;
const Search = Input.Search;
const { TextArea } = Input
const options = [{value: 'Tutorat',label: 'Tutorat'},{value: 'Objet',label: 'Pret d objet'},{value: 'Covoiturage',label: 'Covoiturage'}];
function onChange(value) {console.log(value);}

/*
function ticketRecup() // Recupere le ticket en fonction de l'id envoyé dans l'url
	{
		//const IdTicket= this.props.match.params.id ; //
		var IdTicket="-LTdiqMjM6UUvG2TO2ws";
		console.log(IdTicket);
		var tlc= new TicketListControleur;
		var t = null;
		t=tlc.retriveTicket(IdTicket);
		console.log(t);
		return t;
	}
*/	
	var t=null;

class Demande_Consultation  extends Component {

	constructor() {
		super();
		this.state = {
			isSharing: false,
			isStudy: true,
			isCarPooling: false,
			isViewMode: true,
			Categorie:"Tutorat",
			categorieOptions: [
				{value: 'Tutorat',label: 'Tutorat'},
				{value: 'Objet',label: "Prêt d'objet"},
				{value: 'Covoiturage',label: 'Covoiturage'}
			],
			
			ticGlobalInfo: {titre: null, categorie: null, description: null},
			ticSharingInfo: {objet: null},
			ticStudyInfo: {matiere:null, prof:null, theme:null, semestre: null},
			ticCarpoolingInfo: {arrivee:null, depart:null, arriveeTime:null, departTime:null, places:null},
			
			
		}
		
		
		this.ticketRecup().then((value)=> 
		{
			let cat = value.getCategory();
			console.log(cat);
			
			switch(String(cat)) {
			case "Study": 
				this.setState({isSharing: false, isStudy: true, isCarPooling: false, Categorie: "Tutorat", ticGlobalInfo:{titre: value.getTitle(), description:value.getDescription()},ticStudyInfo: {matiere:value.getSubject(), prof:value.getTeacher(), theme:value.getTheme(), semestre:value.getSemester()}, })
				break;
			case "Sharing":
				this.setState({isSharing: true, isStudy: false, isCarPooling: false, Categorie: "Objet", ticGlobalInfo:{titre: value.getTitle(), description:value.getDescription()}, ticSharingInfo: {objet: value.getItem()},})
				console.log(value.getDescription());
				console.log(this.state.ticGlobalInfo.description);
				break;
			case "CarPooling":
				this.setState({isSharing: false, isStudy: false, isCarPooling: true, Categorie: "Covoiturage", ticGlobalInfo:{titre: value.getTitle(), description:value.getDescription()},ticCarpoolingInfo: {arrivee:value.getArrivalLocation(), depart:value.getDeparturLocation(), arriveeTime:value.getArrivalTime(), departTime:value.getDeparturTime(), places:value.getPlaces()} })
				break;
			default:
				this.setState({isSharing: false, isStudy: false, isCarPooling: false, Categorie: "" })
				alert("Pas de Categorie")
		}
		
		})
	
	}

	/*
	onCascaderChange(value) {
		switch(String(value)) {
			case "Tutorat": 
				this.setState({isSharing: false, isStudy: true, isCarPooling: false, Categorie: "Tutorat" })
				break;
			case "Objet":
				this.setState({isSharing: true, isStudy: false, isCarPooling: false, Categorie: "Objet" })
				break;
			case "Covoiturage":
				this.setState({isSharing: false, isStudy: false, isCarPooling: true, Categorie: "Covoiturage"})
				break;
			default:
				this.setState({isSharing: false, isStudy: false, isCarPooling: false, Categorie: "" })
				alert("Pas de Categorie")
		}
	}
	*/
	
	async ticketRecup() // Recupere le ticket en fonction de l'id envoyé dans l'url
	{
		//const IdTicket= this.props.match.params.id ; //
		var IdTicket="-LTdiqMjM6UUvG2TO2ws";
		console.log(IdTicket);
		var tlc= new TicketListControleur;
		t = await tlc.retriveTicket(IdTicket).then((value) => {
			return value
		});
		return t
		
			
	}
	
	
	
	
  render() {
	function h3PlusInput(colorH3,titreH3,valueInput,colorInput,ID="indefini",desactive) 
	{
		return 	<div>
					<h3 style= {{color:colorH3}}>{titreH3}</h3>
					<Input ref={ID} disabled={desactive} defaultValue={desactive ? valueInput : ""} style= {{color:colorInput}} id={ID}/>
				</div>;
	}
	
	
	 // Creation du ticket contenant les infos

	 // Mise a jour des variables état pour l'affichage conditionnel 
	//let cat = t.getCategory;

	//console.log(cat);
	
	
	let component;
	
	if(this.state.isStudy)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly' }} >
			{h3PlusInput('#7F7F7F',"Matiere",this.state.ticStudyInfo.matiere,'#42A6FB',"matiere", this.state.isViewMode)}
			{h3PlusInput('#7F7F7F',"Professeur",this.state.ticStudyInfo.prof,'#42A6FB',"prof", this.state.isViewMode)}
			{h3PlusInput('#7F7F7F',"Thème",this.state.ticStudyInfo.theme,'#42A6FB',"theme", this.state.isViewMode)}
			{h3PlusInput('#7F7F7F',"Semestre",this.state.ticStudyInfo.semestre,'#42A6FB',"semestre", this.state.isViewMode)}
		</div>
	}
	else if(this.state.isSharing)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly' }} >
			{h3PlusInput('#7F7F7F',"Objet",this.state.ticSharingInfo.objet,'#42A6FB',"objet", this.state.isViewMode)}
		</div>
	}
	else if(this.state.isCarPooling)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly' }} >
			{h3PlusInput('#7F7F7F',"Départ",this.state.ticCarpoolingInfo.depart,'#42A6FB',"depart", this.state.isViewMode)}
			{h3PlusInput('#7F7F7F',"Arrivée",this.state.ticCarpoolingInfo.arrivee,'#42A6FB',"arrivee", this.state.isViewMode)}
			{h3PlusInput('#7F7F7F',"Places",this.state.ticCarpoolingInfo.places,'#42A6FB',"places", this.state.isViewMode)}
			{h3PlusInput('#7F7F7F',"Date de départ",this.state.ticCarpoolingInfo.departTime,'#42A6FB',"depart_date", this.state.isViewMode)}
			{h3PlusInput('#7F7F7F',"Date d'arrivée",this.state.ticCarpoolingInfo.arriveeTime,'#42A6FB',"arrivee_date", this.state.isViewMode)}
		</div>
	}
	else
	{
		component = null
	}
	
	
	
	
	
    return (
	
	<Layout style={{ height: '90vh'}} >
		<Top/>
		<Content style={{ margin: '42px 16px'}}>
			<Layout>
			
				<Row style={{left:0, width:150 }}>
					<h1 style= {{color:'#7F7F7F'}}>DEMANDE</h1>
				</Row>
				<Row type="flex" justify="space-around" style={{ textAlign:'center'}}>
					<Col span={16} >
						{h3PlusInput('#7F7F7F',"TITRE",this.state.ticGlobalInfo.titre,'#42A6FB','title', this.state.isViewMode, {width: '100%'} )}
					</Col>
					<Col span={6}>
						<h3 style= {{color:'#7F7F7F'}}>Catégorie</h3>
						<Cascader options={this.state.categorieOptions}  value={[this.state.Categorie]} disabled={this.state.isViewMode} style= {{color:'#42A6FB'}}/>
					</Col>
				</Row>
				{component}
				<Row>
					<div style={{left:0, width:100, background: '#2699FB',textAlign:'center',padding:10}}>
						<h5 style= {{color:'#fff'}}>DESCRIPTION</h5>
					</div>
						<TextArea  value={this.state.isViewMode ? this.state.ticGlobalInfo.description : ""} />
						
				</Row>
				<Row>
					<Col>
							<Button type="primary" >Retour</Button>
					</Col>
				</Row>
			</Layout>
		</Content>
	</Layout>
    );
  }
}

export default Demande_Consultation;

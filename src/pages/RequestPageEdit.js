import React, { Component } from 'react';
import Top from '../components/Top'
import { SessionStore } from '../stores'
import { Input,Layout,Row, Col, Mention, Button, Cascader, Form, Divider} from 'antd';
import { NavLink } from 'react-router-dom';
import TicketListControleur from '../classes/TicketListControleur.js';
//import { SessionStore } from '../stores';
import Chat from '../components/discussion/Chat.js';
import Bottom from '../components/Bottom';
import { HOME } from '../router/routes';

const { Content } = Layout;
const { TextArea } = Input
const FormItem = Form.Item;

class Demande_Consultation  extends Component {

	static contextType = SessionStore
	constructor(props) {
		super(props);
		this.state = { 
			isSharing: false,
			isStudy: false,
			isCarPooling: false,
			isViewMode: false,
			Categorie:"",
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
			idTicket:null,
			ticket:null,
		}
		
		this.ticketRecup().then((value)=> {
			const cat = value.getCategory();
			const conversation = value.getConversation() 
			
			switch(String(cat)) {
			case "Study": 
				this.setState({
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
				console.log(value.getDescription());
				console.log(this.state.ticGlobalInfo.description);
				break;
			case "CarPooling":
				this.setState({
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
					isSharing: false,
					isStudy: false,
					isCarPooling: false,
					Categorie: "",
					conversation: conversation
				})
			}
		})
	}
	
	
	onCascaderChange = (value) => {
		switch(String(value)) { // J'ai du appeller la fonction string car sinon il allait sur default 
			case "Tutorat": 
				this.setState({isSharing: false, isStudy: true, isCarPooling: false })
				break;
			case "Objet":
				this.setState({isSharing: true, isStudy: false, isCarPooling: false })
				break;
			case "Covoiturage":
				this.setState({isSharing: false, isStudy: false, isCarPooling: true })
				break;
			default:
				this.setState({isSharing: false, isStudy: false, isCarPooling: false })
		}
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log(values);
				console.log(this.state.Categorie);
				const auth = this.context;
				const user = auth.getCurrentUser();
				
				
				
				// creation du bon type de ticket
				if(this.state.isStudy)
				{
					var options = {"title":values.title , "description":values.description , "subject": values.matiere, "semester":values.semestre,"teacher":values.prof,"theme":values.theme};
					var t =user.editTicket(this.state.ticket,options);
				}
				else if(this.state.isSharing)
				{
					var options = {"title":values.title , "description":values.description , "item": values.objet};
					var t =user.editTicket(this.state.ticket,options);
				}
				else if(this.state.isCarPooling)
				{
					var options = {"title":values.title , "description":values.description , "departurLocation":values.depart, "arrivalLocation":values.arrivee, "departurTime":values.depart_date, "arrivalTime":values.arrivee_date, "places":values.places };
					var t =user.editTicket(this.state.ticket,options);
				}
				else
				{
					alert("Il n'y a pas de catégorie. Ce message est normalement useless car la categorie est requise. Mais bon au cas où...");
					throw "PROBLEME AU NIVEAU DES CATEGORIES ET DE L'ENVOI DU FORMULAIRE";
				}
				
				t.save();
			}
			else {
				console.log("Erreur fonction on submit"); 
			}
		});
	}
	
	async ticketRecup() // Recupere le ticket en fonction de l'id envoyé dans l'url
	{
		//const IdTicket= this.props.match.params.id ; //
		const IdTicket="-LTt4ArWywKnz3gHvh3S";
		var tlc= new TicketListControleur; 
		let ticket = await tlc.retriveTicket(IdTicket);
		this.setState({idTicket: IdTicket, ticket: ticket });
		console.log(this.state.ticket.getCreationDate(),"OK"); // DEBUG
		return ticket
	}
	
	
  render() {
	 const { getFieldDecorator } = this.props.form
	function h3PlusInput(colorH3,titreH3,valueInput,colorInput,ID,desactive, style=null)
	{
		return 	<div style={style} >
					<h3 style= {{color:colorH3}}>{titreH3}</h3>
					<FormItem required={true} >
					{
						getFieldDecorator(ID, {rules: [ {required: true, message: 'champ requis' }], initialValue:valueInput })(<Input disabled={desactive} style= {{color:colorInput}} />)
					}
					</FormItem>
				</div>;
	}
	
	let component;
	
	if(this.state.isStudy)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly' }} >
			{h3PlusInput('#7F7F7F',"Matiere",this.state.ticStudyInfo.matiere,'#42A6FB',"matiere")}
			{h3PlusInput('#7F7F7F',"Professeur",this.state.ticStudyInfo.prof,'#42A6FB',"prof")}
			{h3PlusInput('#7F7F7F',"Thème",this.state.ticStudyInfo.theme,'#42A6FB',"theme")}
			{h3PlusInput('#7F7F7F',"Semestre",this.state.ticStudyInfo.semestre,'#42A6FB',"semestre")}
		</div>
	}
	else if(this.state.isSharing)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly' }} >
			{h3PlusInput('#7F7F7F',"Objet",this.state.ticSharingInfo.objet,'#42A6FB',"objet")}
		</div>
	}
	else if(this.state.isCarPooling)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly' }} >
			{h3PlusInput('#7F7F7F',"Départ",this.state.ticCarpoolingInfo.depart,'#42A6FB',"depart")}
			{h3PlusInput('#7F7F7F',"Arrivée",this.state.ticCarpoolingInfo.arrivee,'#42A6FB',"arrivee")}
			{h3PlusInput('#7F7F7F',"Places",this.state.ticCarpoolingInfo.places,'#42A6FB',"places")}
			{h3PlusInput('#7F7F7F',"Date de départ",this.state.ticCarpoolingInfo.departTime,'#42A6FB',"depart_date")}
			{h3PlusInput('#7F7F7F',"Date d'arrivée",this.state.ticCarpoolingInfo.arriveeTime,'#42A6FB',"arrivee_date")}
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
			<Form onSubmit={this.onSubmit} >
				<Row style={{left:0, width:150 }}>
					<h1 style= {{color:'#7F7F7F'}}>DEMANDE</h1>
				</Row>
				<Row type="flex" justify="space-around" style={{ textAlign:'center'}}>
					<Col span={16} >
						{h3PlusInput('#7F7F7F',"TITRE",this.state.ticGlobalInfo.titre,'#42A6FB','title', this.state.isViewMode, {width: '100%'} )}
					</Col>
					<Col span={6}>
						<h3 style= {{color:'#7F7F7F'}}>Catégorie</h3>
						<FormItem required={true} >
						{
							getFieldDecorator('categorie', {rules: [ {required: true, message: 'sélectionnez une catégorie'}], initialValue:[this.state.Categorie] })
							(<Cascader options={this.state.categorieOptions} onChange={this.onCascaderChange} disabled style= {{color:'#42A6FB'}}/>)
						}
						</FormItem>
					</Col>
				</Row>
				{component}
				<Row>
					<div style={{left:0, width:100, background: '#2699FB',textAlign:'center',padding:10}}>
						<h5 style= {{color:'#fff'}}>DESCRIPTION</h5>
					</div>
					<FormItem>
					{
						getFieldDecorator('description', {rules: [ {required: true, message: 'description requise'}], initialValue:this.state.ticGlobalInfo.description})(<TextArea style= {{color:'#42A6FB'}} />)
					}
					</FormItem>
				</Row>
				<Row>
					<Col>
						<FormItem style={{ textAlign:"right" }} >
							<Button htmlType="submit" type="primary" >Modifier le ticket</Button>
						</FormItem>
					</Col>
				</Row>
			</Form>
			</Layout>
		</Content>
	</Layout>
    );
  }
}

export default Form.create()(Demande_Consultation);

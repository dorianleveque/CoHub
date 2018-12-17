import React, { Component } from 'react';
import Top from '../components/Top'
import { SessionStore } from '../stores'
import { Input,Layout,Row, Col, Button, Cascader, Form } from 'antd';
import TicketListControleur from '../classes/TicketListControleur.js';
import Bottom from '../components/Bottom';
import { DISPLAY_DEMAND, applyRouteParams } from '../router/routes';
import RangePicker from '../components/RangePicker'
import moment from 'moment'

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
				const auth = this.context;
				const user = auth.getCurrentUser();
				const history = this.props.history;
				// creation du bon type de ticket
				var options = null
				var t = null
				if(this.state.isStudy)
				{
					options = {"title":values.title , "description":values.description , "subject": values.matiere, "semester":values.semestre,"teacher":values.prof,"theme":values.theme};
					t =user.editTicket(this.state.ticket,options);
				}
				else if(this.state.isSharing)
				{
					options = {"title":values.title , "description":values.description , "item": values.objet};
					t =user.editTicket(this.state.ticket,options);
				}
				else if(this.state.isCarPooling)
				{
					options = {"title":values.title , "description":values.description , "departurLocation":values.depart, "arrivalLocation":values.arrivee, "departurTime":values.date[0]._d, "arrivalTime":values.date[1]._d, "places":values.places };
					t =user.editTicket(this.state.ticket,options);
				}
				
				t.save();
				history.push(applyRouteParams(DISPLAY_DEMAND, {id: this.props.match.params.id }));
			}
		});
	}
	
	async ticketRecup() // Recupere le ticket en fonction de l'id envoyé dans l'url
	{
		const IdTicket= this.props.match.params.id ; //
		//const IdTicket="-LTt4ArWywKnz3gHvh3S";
		var tlc= new TicketListControleur(); 
		let ticket = await tlc.retriveTicket(IdTicket);
		this.setState({idTicket: IdTicket, ticket: ticket });
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
			<div>
				<h3 style= {{color:'#7F7F7F'}}>Date</h3>
				<FormItem required={true} >
					{
						getFieldDecorator('date', {rules: [ {required: true, message: 'dates requises' }], initialValue: [moment(this.state.ticCarpoolingInfo.departTime), moment(this.state.ticCarpoolingInfo.arriveeTime)]})(<RangePicker format="DD/MM/YYYY à HH:mm" showTime={{ format: 'HH:mm' }} placeholder={['Départ', 'Arrivée']} />)
					}
				</FormItem>
			</div>
		</div>
	}
	
	else
	{
		component = null
	}
	
    return (
	
	<Layout>
		<Top/>
		<Content style={{ margin: '42px 10%'}}>
			<Layout>
			<Form onSubmit={this.onSubmit} >
				<Row style={{left:0, width:150 }}>
					<h1 style= {{color:'#7F7F7F'}}>DEMANDE</h1>
				</Row>
				<Row type="flex" justify="space-between" style={{ textAlign:'center'}}>
					<div style={{ width: '600px'}} >
						{h3PlusInput('#7F7F7F',"TITRE",this.state.ticGlobalInfo.titre,'#42A6FB','title', this.state.isViewMode, {width: '100%'} )}
					</div>
					<div>
						<h3 style= {{color:'#7F7F7F'}}>Catégorie</h3>
						<FormItem required={true} >
						{
							getFieldDecorator('categorie', {rules: [ {required: true, message: 'sélectionnez une catégorie'}], initialValue:[this.state.Categorie] }) (
							<Cascader options={this.state.categorieOptions} onChange={this.onCascaderChange} disabled style= {{color:'#42A6FB'}}/>
							)
						}
						</FormItem>
					</div>
				</Row>
				<div style={{ marginTop: 60 }} >
					{component}
				</div>
				<Row>
					<h3 style= {{color:'#7F7F7F'}}>Description</h3>
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
		<Bottom/>
	</Layout>
    );
  }
}

export default Form.create()(Demande_Consultation);

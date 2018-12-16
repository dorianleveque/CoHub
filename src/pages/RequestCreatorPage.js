import React, { Component } from 'react';
//import logo from './logo.svg';
import Top from '../components/Top'
import { SessionStore } from '../stores'
import { Input,Layout,Row, Col, Mention, Button, Cascader, Form} from 'antd';


const { Content } = Layout;

const { TextArea } = Input

const FormItem = Form.Item;

class Demande_Consultation  extends Component {

	static contextType = SessionStore
	constructor() {
		super();
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
		}
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
					var options = { "subject": values.matiere, "semester":values.semestre,"teacher":values.prof,"theme":values.theme};
					var t =user.createTicket(null,values.title,values.description,"Study",null,null, options);
				}
				else if(this.state.isSharing)
				{
					var options = { "item": values.objet};
					var t =user.createTicket(null,values.title,values.description,"Sharing",null,null, options);
				}
				else if(this.state.isCarPooling)
				{
					var options = { "departurLocation":values.depart, "arrivalLocation":values.arrivee, "departurTime":values.depart_date, "arrivalTime":values.arrivee_date, "places":values.places };
					var t =user.createTicket(null,values.title,values.description,"CarPooling",null,null, options);
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
	
  render() {
	 const { getFieldDecorator } = this.props.form
	function h3PlusInput(colorH3,titreH3,valueInput,colorInput,ID,desactive, style=null)
	{
		return 	<div style={style} >
					<h3 style= {{color:colorH3}}>{titreH3}</h3>
					<FormItem required={true} >
					{
						getFieldDecorator(ID, {rules: [ {required: true, message: 'champ requis'}]})(<Input disabled={desactive} style= {{color:colorInput}} />)
					}
					</FormItem>
				</div>;
	}
	
	let component;
	
	if(this.state.isStudy)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly' }} >
			{h3PlusInput('#7F7F7F',"Matiere","Maths",'#42A6FB',"matiere", this.state.isViewMode)}
			{h3PlusInput('#7F7F7F',"Professeur","Mr le prof",'#42A6FB',"prof", this.state.isViewMode)}
			{h3PlusInput('#7F7F7F',"Thème","Le theme",'#42A6FB',"theme", this.state.isViewMode)}
			{h3PlusInput('#7F7F7F',"Semestre","SX",'#42A6FB',"semestre", this.state.isViewMode)}
		</div>
	}
	else if(this.state.isSharing)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly' }} >
			{h3PlusInput('#7F7F7F',"Objet","Tournevis",'#42A6FB',"objet", this.state.isViewMode)}
		</div>
	}
	else if(this.state.isCarPooling)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly' }} >
			{h3PlusInput('#7F7F7F',"Départ","Brest",'#42A6FB',"depart", this.state.isViewMode)}
			{h3PlusInput('#7F7F7F',"Arrivée","Marseilles",'#42A6FB',"arrivee", this.state.isViewMode)}
			{h3PlusInput('#7F7F7F',"Places","3",'#42A6FB',"places", this.state.isViewMode)}
			{h3PlusInput('#7F7F7F',"Date de départ","11/06/2018",'#42A6FB',"depart_date", this.state.isViewMode)}
			{h3PlusInput('#7F7F7F',"Date d'arrivée","12/06/2018",'#42A6FB',"arrivee_date", this.state.isViewMode)}
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
						{h3PlusInput('#7F7F7F',"TITRE","Titre du ticket",'#42A6FB','title', this.state.isViewMode, {width: '100%'} )}
					</Col>
					<Col span={6}>
						<h3 style= {{color:'#7F7F7F'}}>Catégorie</h3>
						<FormItem required={true} >
						{
							getFieldDecorator('categorie', {rules: [ {required: true, message: 'sélectionnez une catégorie'}]})
							(<Cascader options={this.state.categorieOptions} onChange={this.onCascaderChange} disabled={this.state.isViewMode} style= {{color:'#42A6FB'}}/>)
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
						getFieldDecorator('description', {rules: [ {required: true, message: 'description requise'}]})(<TextArea  />)
					}
					</FormItem>
				</Row>
				<Row>
					<Col>
						<FormItem style={{ textAlign:"right" }} >
							<Button htmlType="submit" type="primary" >Aider cette personne</Button>
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

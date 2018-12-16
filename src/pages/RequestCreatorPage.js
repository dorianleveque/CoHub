import React, { Component } from 'react';
import Top from '../components/Top'
import { SessionStore } from '../stores'
import { Input,Layout,Row, Col, Button, Cascader, Form, DatePicker } from 'antd';
import Bottom from '../components/Bottom';
import { HOME } from '../router/routes';

const { RangePicker } = DatePicker;
const { Content } = Layout;
const { TextArea } = Input
const FormItem = Form.Item;

class EditDemandeConsultationPage  extends Component {

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
				const auth = this.context;
				const user = auth.getCurrentUser();
				const history = this.props.history;

				// creation du bon type de ticket
				if(this.state.isStudy)
				{
					var options = { "subject": values.matiere, "semester":values.semestre,"teacher":values.prof,"theme":values.theme};
					var t =user.createTicket(null,values.title,values.description,"Study",new Date(),null, options);
				}
				else if(this.state.isSharing)
				{
					var options = { "item": values.objet};
					var t =user.createTicket(null,values.title,values.description,"Sharing",new Date(),null, options);
				}
				else if(this.state.isCarPooling)
				{
					var options = { "departurLocation":values.depart, "arrivalLocation":values.arrivee, "departurTime":values.date[0]._d, "arrivalTime":values.date[1]._d, "places":values.places };
					var t =user.createTicket(null,values.title,values.description,"CarPooling",new Date(),null, options);
				}

				t.save();
				history.push(HOME);
			}
		});
	}
	
  render() {
	 const { getFieldDecorator } = this.props.form
	function fieldForm(ID,titre, message, component)
	{
		return 	<div style={{margin:'0 10px'}} >
					<h3 style= {{color:'#7F7F7F'}}>{titre}</h3>
					<FormItem required={true} >
					{
						getFieldDecorator(ID, {rules: [ {required: true, message: message}]})(component)
					}
					</FormItem>
				</div>;
	}
	
	let component;
	
	if(this.state.isStudy)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between' }} >
			{fieldForm("matiere","Matiere", "la matière est requise", <Input style= {{color:'#42A6FB'}} />)}
			{fieldForm("prof","Professeur", "le professeur est requis", <Input style= {{color:'#42A6FB'}} />)}
			{fieldForm("theme","Thème", "le thème est requis", <Input style= {{color:'#42A6FB'}} />)}
			{fieldForm("semestre","Semestre", "le semestre n'a pas été renseigné", <Input style= {{color:'#42A6FB'}} />)}
		</div>
	}
	else if(this.state.isSharing)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between' }} >
			{fieldForm("objet","Objet", "l'objet est requis", <Input style= {{color:'#42A6FB'}} />)}
		</div>
	}
	else if(this.state.isCarPooling)
	{
		component = <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between' }} >
			{fieldForm("depart","Départ", "le lieu de départ n'a pas été renseigné", <Input style= {{color:'#42A6FB'}} />)}
			{fieldForm("arrivee","Arrivée", "le lieu d'arrivée n'a pas été renseigné", <Input style= {{color:'#42A6FB'}} />)}
			{fieldForm("places","Places", "le nombre de place n'a pas été renseigné", <Input style= {{color:'#42A6FB'}} />)}
			{fieldForm("date","Date", "la date n'a pas été renseignée", <RangePicker format="DD/MM/YYYY à HH:mm" showTime={{ format: 'HH:mm' }}  placeholder={['Départ', 'Arrivée']} />)}
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
				<Row>
					<h1 style= {{color:'#7F7F7F'}}>CREATION D'UNE DEMANDE</h1>
				</Row>
				<Row type="flex" justify="space-between" style={{ textAlign:'center', marginTop:'30px' }}>
					<div style={{ width: '600px'}} >
						{fieldForm('title',"Titre", "le titre est requis", <Input style= {{color:'#42A6FB'}} />)}
					</div>
					<div>
						{fieldForm('categorie',"Catégorie", "la catégorie est requise", <Cascader options={this.state.categorieOptions} onChange={this.onCascaderChange} disabled={this.state.isViewMode} style= {{color:'#42A6FB'}}/>)}
					</div>
				</Row>
				{component}
				<Row>
					{fieldForm('description',"Description", "la description est requise", <TextArea  /> )}
				</Row>
				<Row>
					<Col>
						<FormItem style={{ textAlign:"right" }} >
							<Button htmlType="submit" type="primary" >Créer la demande</Button>
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

export default Form.create()(EditDemandeConsultationPage);

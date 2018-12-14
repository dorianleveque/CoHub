import React, { Component } from 'react';
//import logo from './logo.svg';
import Top from '../components/Top'
import { Input,Divider,Layout,Row, Col, Mention, Button, Cascader} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { toString } = Mention;
//function onChange(editorState) {console.log(toString(editorState));}
const Search = Input.Search;
const { TextArea } = Input
const options = [{value: 'Tutorat',label: 'Tutorat'},{value: 'Objet',label: 'Pret d objet'},{value: 'Covoiturage',label: 'Covoiturage'}];
function onChange(value) {console.log(value);}

function leaule()
	{
		//var hu = document.getElementById("semestre").value;
		//alert(hu);
		console.log("hey !");
	}

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
		}
	}
	componentDidMount() {
		
	}
	
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
	
	
  render() {
	function h3PlusInput(colorH3,titreH3,valueInput,colorInput,ID="indefini",desactive) 
	{
		return 	<div>
					<h3 style= {{color:colorH3}}>{titreH3}</h3>
					<Input ref={ID} disabled={desactive} defaultValue={desactive ? valueInput : ""} style= {{color:colorInput}} id={ID}/>
				</div>;
	}
	
	
	console.log(this.state.Categorie);
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
	
	
	
	// IMPORTANT
	const IdTicket= this.props.match.params ;
	console.log(IdTicket);
	// faire un set state par la suite
	
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
						{h3PlusInput('#7F7F7F',"TITRE","Titre du ticket",'#42A6FB','title', this.state.isViewMode, {width: '100%'} )}
					</Col>
					<Col span={6}>
						<h3 style= {{color:'#7F7F7F'}}>Catégorie</h3>
						<Cascader options={this.state.categorieOptions} onChange={this.onCascaderChange} value={[this.state.Categorie]} disabled={this.state.isViewMode} style= {{color:'#42A6FB'}}/>
					</Col>
				</Row>
				{component}
				<Row>
					<div style={{left:0, width:100, background: '#2699FB',textAlign:'center',padding:10}}>
						<h5 style= {{color:'#fff'}}>DESCRIPTION</h5>
					</div>
						<TextArea  />
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

import React, { Component } from 'react';
//import logo from './logo.svg';
import Top from '../components/Top'
import { Input,Divider,Layout,Row, Col, Mention, Button, Cascader} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { toString } = Mention;
//function onChange(editorState) {console.log(toString(editorState));}
const Search = Input.Search;
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
			isStudy: false,
			isCarPooling: false,
			isViewMode: true
		}
	}
	componentDidMount() {
		
	}
	
	onCascaderChange(value) {
		switch(value) {
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
	
	// LES VARIABLES A MODIFIER SONT ICI POUR LE FONCTIONNEMENT DU PROG
	var Categorie = "Tutorat"; // Variable a modifier pour afficher les differentes categories de tickets
	var isViewMode=true; //Variable a modifier en fonction du type de page (mode consultation: mettre a true, mode edition: mettre a false).
	
	
	
	/*var isSharing = false;
	var isStudy = false;
	var isCarPooling = false;
	if(Categorie === "Tutorat"){ this.setState({isSharing: false, isStudy: true, isCarPooling: false }) }
	else if (Categorie === "Objet"){isSharing = true; isStudy = false; isCarPooling = false;}
	else if (Categorie === "Covoiturage"){isSharing = false; isStudy = false; isCarPooling = true;}
	else{isSharing = false; isStudy = false; isCarPooling = false; alert("Pas de Categorie");}*/
	
	let Demande_titre;
	let Ligne1;
	let Ligne2;
	let Ligne3;
	let Description_Conv;
	Demande_titre=	<div>
						<Layout style={{left:0, width:150, background:'#F1F9FF'}}>
							<h1 style= {{color:'#7F7F7F'}}>DEMANDE</h1>
						</Layout>
						<Row >
							<Layout style={{background:'#F1F9FF', textAlign:'center'}}>
								<Col span={12} offset={6}>
									{h3PlusInput('#7F7F7F',"TITRE","Titre du ticket",'#42A6FB','title', this.state.isViewMode)}
								</Col>
							</Layout>
						</Row>
					</div>;
	if(this.state.isStudy)
	{
	Ligne1=	<Row>
				<Col span={6}>
					{h3PlusInput('#7F7F7F',"Demandeur","Mr le demandeur",'#42A6FB',"demandeur", this.state.isViewMode)}
					
				</Col>
				<Col span={6} offset={3}>
					<h3 style= {{color:'#7F7F7F'}}>Catégorie</h3>
					<Cascader options={options} onChange={this.onCascaderChange} defaultValue={this.state.isViewMode ? [Categorie] : []} disabled={this.state.isViewMode} style= {{color:'#42A6FB'}}/>
					
				</Col>
				<Col span={6} offset={3}>
					{h3PlusInput('#7F7F7F',"Matiere","Maths",'#42A6FB',"matiere", this.state.isViewMode)}
				</Col>
			</Row>;
	Ligne2= <Row>
				<Col span={6}>
					{h3PlusInput('#7F7F7F',"Professeur","Mr le prof",'#42A6FB',"prof", this.state.isViewMode)}
				</Col>
				<Col span={6} offset={3}>
					{h3PlusInput('#7F7F7F',"Thème","Le theme",'#42A6FB',"theme", this.state.isViewMode)}
				</Col>
				<Col span={6} offset={3}>
					{h3PlusInput('#7F7F7F',"Semestre","SX",'#42A6FB',"semestre", this.state.isViewMode)}
				</Col>
			</Row>;
	
	Ligne3= <Row></Row>;
	}
	else if(this.state.isSharing)
	{
	Ligne1=	<Row>
				<Col span={6}>
					{h3PlusInput('#7F7F7F',"Demandeur","Mr le demandeur",'#42A6FB',"demandeur", this.state.isViewMode)}
					
				</Col>
				<Col span={6} offset={3}>
					<h3 style= {{color:'#7F7F7F'}}>Catégorie</h3>
					<Cascader options={options} onChange={onChange} defaultValue={this.state.isViewMode ? [Categorie] : []} disabled={this.state.isViewMode} style= {{color:'#42A6FB'}}/>
					
				</Col>
				<Col span={6} offset={3}>
					{h3PlusInput('#7F7F7F',"Objet","Tournevis",'#42A6FB',"objet", this.state.isViewMode)}
				</Col>
			</Row>;
			
	Ligne2= <Row></Row>;
	Ligne3= <Row></Row>;
	}
	else if(this.state.isCarPooling)
	{
	Ligne1=	<Row>
				<Col span={6}>
					{h3PlusInput('#7F7F7F',"Demandeur","Mr le demandeur",'#42A6FB',"demandeur", this.state.isViewMode)}
					
				</Col>
				<Col span={6} offset={3}>
					<h3 style= {{color:'#7F7F7F'}}>Catégorie</h3>
					<Cascader options={options} onChange={onChange} defaultValue={this.state.isViewMode ? [Categorie] : []} disabled={this.state.isViewMode} style= {{color:'#42A6FB'}}/>
					
				</Col>
				<Col span={6} offset={3}>
				
				</Col>
			</Row>;
			
	Ligne2= <Row>
				<Col span={6}>
					{h3PlusInput('#7F7F7F',"Départ","Brest",'#42A6FB',"depart", this.state.isViewMode)}
				</Col>
				<Col span={6} offset={3}>
					{h3PlusInput('#7F7F7F',"Arrivée","Marseilles",'#42A6FB',"arrivee", this.state.isViewMode)}
				</Col>
				<Col span={6} offset={3}>
					{h3PlusInput('#7F7F7F',"Places","3",'#42A6FB',"places", this.state.isViewMode)}
				</Col>
			</Row>;
			
	Ligne3= <Row>
				<Col span={6}>
					{h3PlusInput('#7F7F7F',"Date de départ","11/06/2018",'#42A6FB',"depart_date", this.state.isViewMode)}
				</Col>
				<Col span={6} offset={3}>
					{h3PlusInput('#7F7F7F',"Date d arrivée","12/06/2018",'#42A6FB',"arrivee_date", this.state.isViewMode)}
				</Col>
				<Col span={6} offset={3}>
					
				</Col>
			</Row>;
	}

	
	
	
	Description_Conv=		<div>
								<Layout style={{left:0, width:100, background: '#2699FB',textAlign:'center',padding:10}}>
									<h6 style= {{color:'#fff'}}>DEMANDE</h6>
								</Layout>
								<Mention style={{ width: '90%', height: 100, color:'#42A6FB'}} multiLines disabled={this.state.isViewMode} defaultValue= {this.state.isViewMode ? Mention.toContentState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") : null} />
								<Divider style={{height:0, position:'relative', margin:40}}/>
								
								<Layout style={{left:0, width:100, background: '#2699FB',textAlign:'center',padding:10,fontcolor:'#ffffff'}}>
									<h6 style= {{color:'#fff'}}>CONVERSATION</h6>
								</Layout>
								<Mention style={{ width: '90%', height: 100, color:'#42A6FB'}} multiLines disabled={this.state.isViewMode} defaultValue={this.state.isViewMode? Mention.toContentState("Type something") : null} />
								<div>
									<Button type="primary" onClick={leaule()}>Envoyer</Button>
								</div>
								<Row>
									<Col span={3} offset={20}>
										<Button type="primary">Aider cette personne</Button>
									</Col>
								</Row>
							</div>
	
    return (
	
	<Layout>
		<Top/>
		<Layout style={{background: '#F1F9FF'}}>
			<Content style={{ margin: '24px 16px', padding: 24}}>
				<div>
					{Demande_titre}
					<Divider style={{height:0, position:'relative', margin:10}} />
					{Ligne1}
					<Divider style={{height:0, position:'relative', margin:10}}/>
					{Ligne2}
					<Divider style={{height:0, position:'relative', margin:10}}/>
					{Ligne3}
					<Divider style={{height:0, position:'relative', margin:40}}/>
					{Description_Conv}	
				</div>
				
				
				
			</Content>
		</Layout>
	</Layout>
    );
  }
}

export default Demande_Consultation;

import React, { Component } from 'react';
import { Input,Divider,Layout,Row, Col, Mention, Button} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { toString } = Mention;
function onChange(editorState) {console.log(toString(editorState));}


class RequestPage  extends Component {
  render() {
    return (
      
	  <Layout>
	  <Header>Header</Header>
	  <Layout style={{background: '#F1F9FF'}}>
	  <Content style={{ margin: '24px 16px', padding: 24}}>
	  <div>
	  
		<Layout style={{left:0, width:150, background:'#F1F9FF'}}>
			<h1>DEMANDE</h1>
		</Layout>
		
		
		<Row >
			<Layout style={{background:'#F1F9FF', textAlign:'center'}}>
				<Col span={12} offset={6}>
					<h3>Titre</h3>
					<Input value="Titre du ticket" />
				</Col>
			</Layout>
		</Row>
		
		<Divider style={{height:0, position:'relative', margin:10}} />
		 <div>
			<Row>
				<Col span={6}>
					<h3>Demandeur</h3>
					<Input value="Demandeur" />
				</Col>
				<Col span={6} offset={3}>
				<h3>Catégorie</h3>
					<Input value="Catégorie" />
				</Col>
				<Col span={6} offset={3}>
				<h3>Sujet</h3>
					<Input value="Sujet" />
				</Col>
			</Row>
		</div>
		<Divider style={{height:0, position:'relative', margin:10}}/>
			<Row>
				<Col span={6}>
					<h3>Professeur</h3>
					<Input value="Professeur" />
				</Col>
				<Col span={6} offset={3}>
				<h3>Theme</h3>
					<Input value="Theme" />
				</Col>
				<Col span={6} offset={3}>
				<h3>Semestre</h3>
					<Input value="Semestre" />
				</Col>
			</Row>
			
			<Divider dashed />
			
			<Layout style={{left:0, width:100, background: '#2699FB',textAlign:'center',padding:10,fontcolor:'white'}}>
			<h6>DEMANDE</h6>
			</Layout>
			
			<Mention style={{ width: '90%', height: 100}} multiLines placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
	
			<Divider style={{height:0, position:'relative', margin:40}}/>
			
			<Layout style={{left:0, width:100, background: '#2699FB',textAlign:'center',padding:10,fontcolor:'#ffffff'}}>
				<h6>CONVERSATION</h6>
			</Layout>
			
			<Mention style={{ width: '90%', height: 100}} multiLines placeholder="Type something" />
			<div>
				<Button type="primary">Envoyer</Button>
			</div>
			
			<Row>
				<Col span={3} offset={20}>
					<Button type="primary">Aider cette personne</Button>
				</Col>
			</Row>
				
				
				
			
	</div>
	</Content>
	</Layout>
	<Footer><h2>LE FOOTER</h2></Footer>
	</Layout>
    );
  }
}

export default RequestPage;

import React, { Component } from 'react';
import { Layout, Col, Row } from 'antd';

const { Footer } = Layout;

class Bot extends Component { // demande un argument

  constructor(props) { // constructuer de Top
    super(props); // utile ?
    this.ismenu = this.props.ismenu; //récupère la valeur donné par le proprs afin de savoir si nous somme sur le menu ou non

  }

  
  render() {  

    return (
      <div>
        <Footer style={{ textAlign: 'center' }}>
				<Row>
					<Col span={8}>
						Anouk CHEVALIER, Jarod DELABRE, Elouan EVEN,  Dorian LEVEQUE
					</Col>
					<Col span={8}>
						Logo cohub<br />
						"La classe bouton a été crée"
					</Col>
					<Col span={8}>
						<a href="https://git.enib.fr/d5levequ/CoHub.git">Le lien vers notre GIT</a><br />
						Anouk a encore tout cassé: 4 fois
					</Col>
				</Row>
				
			</Footer>
      </div>
    );
  }
}

export default Bot;

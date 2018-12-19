import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Layout, Col, Row } from 'antd';
import { HOME } from '../router/routes'
import MenuBurger from './MenuBurger';
import AvatarAccount from './AvatarAccount';
import { SessionStore } from '../stores';

const { Header } = Layout;

class Top extends Component { // demande un argument

  static contextType = SessionStore
  constructor(props) { // constructuer de Top
    super(props); // utile ?
    this.ismenu = this.props.ismenu; //récupère la valeur donné par le proprs afin de savoir si nous somme sur le menu ou non

  }

  togleSideBar = () => {
    this.props.togleSideBar();
  };

  orderItems = (value) => {
	
	this.props.orderItems(value);

  }

  searchItems = (value) => {

	this.props.searchItems(value)
  }


  
  render() {  // permet l'affichage du top
    // Permet de de déterminer si on affiche ou non l'hamburger

    const ismenu = this.ismenu;// simplification
    let hamburger; // création de hamburger, varibale contenat le code à rajouter pour le menu hamburger (peut etre vide)

    if (ismenu) { //récupère la valeur donné par le proprs afin de savoir si nous somme sur le menu ou non
      hamburger = <MenuBurger togleSideBar={this.togleSideBar} orderItems={this.orderItems} searchItems = {this.searchItems}  />; // insère le code du menu hamburger
    } else if(this.props.enabledAccountAvatar) {
      hamburger = <div>
                    <NavLink to={HOME} style={{color: 'white'}}>
                      <Col offset= {10} span={3}> <h3 style={{ textAlign: 'center', color :'#FFF' }}>CoHub </h3></Col>
                    </NavLink>
                    <Col span={1} offset={10}> 
                      <AvatarAccount isConnected={this.context.isConnected()} user={this.context.getCurrentUser()} confirm={() => this.context.disconnect() } />
                    </Col>
                  </div>
    } else {
      hamburger = <Col offset={11} span={3}> 
              <div style={{ textAlign: 'center' }}> 
                  <NavLink to={HOME} style={{color: 'white'}}>
                  <h3 style={{color :'#FFF'}}>CoHub</h3>
                  </NavLink>
              </div>
          </Col>;
    }

    return (
      <div>
        <Header style={{ background: '#1890ff', color: '#fff', fontSize: '20px', height: '70px' }}>
          <div >
            <Row>
              {hamburger}
            </Row>
          </div>
        </Header>
      </div>
    );
  }
}

export default Top;

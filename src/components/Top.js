import React, { Component } from 'react';
import { Layout, Col, Row } from 'antd';
import Menu_burger from './MenuBurger';
import { NavLink } from 'react-router-dom'
import { HOME } from '../router/routes'
const { Header } = Layout;

class Top extends Component { // demande un argument

  constructor(props) { // constructuer de Top
    super(props); // utile ?
    this.ismenu = this.props.ismenu; //récupère la valeur donné par le proprs afin de savoir si nous somme sur le menu ou non

  }

  togleSideBar = () => {
    this.props.togleSideBar();
  };
  
  render() {  // permet l'affichage du top
    // Permet de de déterminer si on affiche ou non l'hamburger

    const ismenu = this.ismenu;// simplification
    let hamburger; // création de hamburger, varibale contenat le code à rajouter pour le menu hamburger (peut etre vide)

    if (ismenu) { //récupère la valeur donné par le proprs afin de savoir si nous somme sur le menu ou non
      hamburger = <Menu_burger togleSideBar={this.togleSideBar} />; // insère le code du menu hamburger
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

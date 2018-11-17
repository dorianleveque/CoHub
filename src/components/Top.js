import React, { Component } from 'react';
import './App.css';
import { Layout, Col, Row } from 'antd';
import Menu_burger from './Menu_burger';

const { Header } = Layout;

class Top extends Component { // demande un argument

  constructor(props) { // constructuer de Top
    super(props); // utile ?
    this.ismenu = this.props.ismenu; //récupère la valeur donné par le proprs afin de savoir si nous somme sur le menu ou non

  }
  togleSideBar = () => {
    console.log("hellow");
    this.props.togleSideBar();
  };


  render() {  // permet l'affichage du top
    // Permet de de déterminer si on affiche ou non l'hamburger

    const ismenu = this.ismenu;// simplification
    let hamburger; // création de hamburger, varibale contenat le code à rajouter pour le menu hamburger (peut etre vide)

    if (ismenu) { //récupère la valeur donné par le proprs afin de savoir si nous somme sur le menu ou non
      hamburger = <Menu_burger togleSideBar={this.togleSideBar} />; // insère le code du menu hamburger
    } else {
      hamburger = <Col span={24}> <div style={{ textAlign: 'center' }}>CoHub </div></Col>;
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

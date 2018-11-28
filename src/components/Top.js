import React, { Component } from 'react';
import { Layout, Col, Row, Icon } from 'antd';
import Menu_burger from './MenuBurger';
import CoHub_icon from '../images/CoHub.png'

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

    const style = {
      img: {
        height: 'auto',
        width: '50px',
        marginRight: '10px',
        filter: 'opacity(100%) drop-shadow(rgb(0, 0, 0) 0px 0px 0px) invert(100%)'
      },
      parentDiv: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center'
      },
      title: {
        color: 'white'
      }
    }


    const ismenu = this.ismenu;// simplification
    let hamburger; // création de hamburger, varibale contenat le code à rajouter pour le menu hamburger (peut etre vide)
    let icon = () => <img style={style.img} src={CoHub_icon} />

    if (ismenu) { //récupère la valeur donné par le proprs afin de savoir si nous somme sur le menu ou non
      hamburger = <Menu_burger togleSideBar={this.togleSideBar} />; // insère le code du menu hamburger
    } else {
      hamburger = <Col span={24}> 
                    <div style={ style.parentDiv }>
                      <Icon component={icon} />
                      <h4 style={ style.title }>CoHub</h4>
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

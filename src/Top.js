import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
//import Menu_burger from './Menu_burger'
const { Header, Footer, Sider, Content } = Layout;

class Top extends Component { // demande un argument

  constructor(props) { // constructuer de Top
    super(props); // utile ?
    this.ismenu = this.props.ismenu  //récupère la valeur donné par le proprs afin de savoir si nous somme sur le menu ou non
  }
 


  render() {  // permet l'affichage du top


    // Permet de de déterminer si on affiche ou non l'hamburger


 //   const ismenu = this.ismenu;// simplification
 //   let hamburger; // création de hamburger, varibale contenat le code à rajouter pour le menu hamburger (peut etre vide)

 //   if (ismenu) { //récupère la valeur donné par le proprs afin de savoir si nous somme sur le menu ou non
 //     hamburger = <Menu_burger/>; // insère le code du menu hamburger
  //  } else {
  //    hamburger = <br/>; // insère rien
  //  }



    return (
      <div>
 
        <Layout>
 
        
        <Header style={{ background: '#1890ff' , color :'#fff' , fontSize : '20px', height: '70px' }}>
        CoHub
        </Header> 
        
      </Layout> 
      </div>
    );
  }
}

export default Top;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Drawer, Button, Radio, Icon } from 'antd';

import { Layout } from 'antd';
const {  Sider } = Layout;


const RadioGroup = Radio.Group;


class Menu_burger extends Component {

  state = { visible: false, placement: "left" };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };


  render()
  {
    return (
      <div>
        
        <Sider style={{ background: '#1890ff' , color :'#fff' , fontSize : '20px' , height: '70px' }}  onClick={this.showDrawer}>
          <Icon type="menu-unfold" />
        </Sider>
        <Drawer
          title="CoHub"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
        <p>Tout</p>
          <p>Covoiturage</p>
          <p>Aide Devoir</p>
          <p>Pret</p>
        </Drawer>
      </div>
    );
  }
}

export default Menu_burger;
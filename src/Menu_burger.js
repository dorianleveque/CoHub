import React, { Component } from 'react';
import './App.css';

import { Drawer, Button, Radio, Icon, Col ,  Row } from 'antd';

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
        <Col span= {1}> <Icon type="menu-unfold" onClick={this.showDrawer} /> </Col>
	<Col span= {22}> <div style={{textAlign :'center'}}>CoHub </div></Col>
	<Col span= {1}> <Icon type="user" /> </Col>
      </div>
    );
  }
}

export default Menu_burger;

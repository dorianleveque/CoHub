import React, { Component } from 'react';
import './App.css';

import { Icon, Col } from 'antd';


class Menu_burger extends Component {

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

import React, { Component } from 'react';
import './App.css';

import { Icon, Col } from 'antd';


class Menu_burger extends Component {

  togleSideBar (){
    this.props.togleSideBar();
  }

// bind(this ??)
  render()
  {
    return (
      <div> 
        <Col span= {1}> <Icon type="menu-unfold" onClick={this.togleSideBar.bind(this)} /> </Col>
	<Col span= {22}> <div style={{textAlign :'center'}}>CoHub </div></Col>
	<Col span= {1}> <Icon type="user" /> </Col>
      </div>
    );
  }
}

export default Menu_burger;

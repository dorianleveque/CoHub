import React, { Component } from 'react';
import { Icon, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import { HOME } from '../router/routes';
import { SessionStore } from '../stores';
import AvatarAccount from './AvatarAccount';

class MenuBurger extends Component {

  static contextType = SessionStore

  togleSideBar() {
    this.props.togleSideBar();
  }
  
  searchItems = (value) => {
	  this.props.searchItems(value)
  }
	
  orderItems = (value) => {
	  this.props.orderItems(value);
  }

  confirm = () => {
    this.context.disconnect()
  }

  render() {
    return (
      <div>
        <Col span={2}> 
          <div onClick={this.togleSideBar.bind(this)} style={{width: '30px', cursor: 'pointer'}} >
            <Icon type="menu-unfold" /> 
          </div>
        </Col>
        <NavLink to={HOME} style={{color: 'white'}}>
        <Col offset= {8} span={3}> <h3 style={{ textAlign: 'center', color :'#FFF' }}>CoHub </h3></Col>
        </NavLink>
        <Col span={1} offset={10}> 
          <AvatarAccount isConnected={this.context.isConnected()} user={this.context.getCurrentUser()} confirm={this.confirm} />
        </Col>
      </div>
    );
  }
}

export default MenuBurger;

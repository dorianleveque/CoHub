import React, { Component } from 'react';
import { Icon, Col } from 'antd';
import { NavLink } from 'react-router-dom'
import { SIGN_IN } from '../router/routes'

class MenuBurger extends Component {

  togleSideBar() {
    this.props.togleSideBar();
  }

  render() {
    return (
      <div>
        <Col span={2}> 
          <div onClick={this.togleSideBar.bind(this)} style={{width: '30px', cursor: 'pointer'}} >
            <Icon type="menu-unfold" /> 
          </div>
        </Col>
        <Col span={20}> <div style={{ textAlign: 'center' }}>CoHub </div></Col>
        <Col span={1} offset={1}> 
          <NavLink to={SIGN_IN} style={{color: 'white'}}>
            <Icon type="user" />
          </NavLink>
        </Col>
      </div>
    );
  }
}

export default MenuBurger;

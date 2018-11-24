import React, { Component } from 'react';
import { Icon, Col , Input  } from 'antd';
import { NavLink } from 'react-router-dom'
import { SIGN_IN , HOME } from '../router/routes'
const Search = Input.Search;

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
        <NavLink to={HOME} style={{color: 'white'}}>
        <Col offset= {6} span={3}> <div style={{ textAlign: 'center' }}>CoHub </div></Col>
        </NavLink>
        <Col offset = {5} span = {2}>
         <Search
            onSearch={value => console.log(value)}
            style={{ width: '200px'  }}
            />
        </Col>
        <Col span={1} offset={5}> 
          <NavLink to={SIGN_IN} style={{color: 'white'}}>
            <Icon type="user" />
          </NavLink>
        </Col>
      </div>
    );
  }
}

export default MenuBurger;

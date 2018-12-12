import React, { Component } from 'react';
import { Icon, Col , Input  } from 'antd';
import { NavLink } from 'react-router-dom'
import { SIGN_IN , HOME } from '../router/routes'
import { SessionStore } from '../stores';
import { Popconfirm, message, Button } from 'antd';

const Search = Input.Search;

class MenuBurger extends Component {


  static contextType = SessionStore

  togleSideBar() {
    this.props.togleSideBar();
  }

confirm = () => {
	this.context.signOut()
}

  render() {
	let account ;
	let connected = this.context.isValide()
	if (connected) {
		account =  <Popconfirm placement="bottomRight" title="Voulez-vous vous déconecter ?" onConfirm={this.confirm} okText="Yes" cancelText="No">
            		<Icon type="user" />
			</Popconfirm> ;
	}
	else  {

		account = <NavLink to={SIGN_IN} style={{color: 'white'}}>
            <Icon type="user" />
          </NavLink>
	}
	  
	  
	  //if connected PopComfirm br
	  //if not connected Navlink

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
	    {account}
        </Col>
      </div>
    );
  }
}

export default MenuBurger;

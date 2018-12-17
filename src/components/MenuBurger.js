import React, { Component } from 'react';
import { Icon, Col , Popconfirm } from 'antd';
import { NavLink } from 'react-router-dom'
import { SIGN_IN , HOME } from '../router/routes'
import { SessionStore } from '../stores';
import Avatar from '../components/Avatar'

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
  let account;
	if (this.context.isConnected()) {
    let curentUser = this.context.getCurrentUser()
    const firstname = curentUser.getName()
    const surname   = curentUser.getSurname()
    let name = `${ firstname } ${ surname }`
		account =  <Popconfirm placement="bottomRight" title="Voulez-vous vous déconnecter ?" onConfirm={this.confirm} okText="Yes" cancelText="No">
            		<div style={{ cursor: 'pointer' }}>
                  <Avatar name={name} />
                </div>
			</Popconfirm> ;
	}

	else  {
		account = <NavLink to={SIGN_IN} style={{color: 'white'}}>
            <Icon type="user" />
          </NavLink>
	}

    return (
      <div>
        <Col span={2}> 
          <div onClick={this.togleSideBar.bind(this)} style={{width: '30px', cursor: 'pointer'}} >
            <Icon type="menu-unfold" /> 
          </div>
        </Col>
        <NavLink to={HOME} style={{color: 'white'}}>
        <Col offset= {8} span={3}> <div style={{ textAlign: 'center' }}>CoHub </div></Col>
        </NavLink>
        <Col span={1} offset={10}> 
	    {account}
        </Col>
      </div>
    );
  }
}

export default MenuBurger;

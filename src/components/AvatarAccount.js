import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Popconfirm, Icon } from 'antd'
import Avatar from './Avatar'
import { SIGN_IN } from '../router/routes'


class AvatarAccount extends Component {

  render() {
    let account;
    if (this.props.isConnected) {
      let curentUser = this.props.user
      const firstname = curentUser.getName()
      const surname = curentUser.getSurname()
      let name = `${firstname} ${surname}`
      account = <Popconfirm placement="bottomRight" title="Voulez-vous vous déconnecter ?" onConfirm={this.props.confirm} okText="Yes" cancelText="No">
        <div style={{ cursor: 'pointer' }}>
          <Avatar name={name} />
        </div>
      </Popconfirm>;
    }

    else {
      account = <NavLink to={SIGN_IN} style={{ color: 'white' }}>
        <Icon type="user" />
      </NavLink>
    }
    return account
  }
}

export default AvatarAccount
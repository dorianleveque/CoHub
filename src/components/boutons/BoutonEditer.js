import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Button } from 'antd';
import { EDIT_DEMAND, applyRouteParams } from '../../router/routes';

const style = {
  button: {
    position: 'fixed',
    right: '40px',
    bottom: '100px',
    width: '50px',
    height: '50px'
  },
  title: {
    textAlign: 'center'
  }
}

class BoutonEditer extends Component {
  render(){
   	return (
      <div>
      <NavLink to={applyRouteParams(EDIT_DEMAND, {id: this.props.id })}>
        <Button type="primary" shape="circle" icon="edit" size="large" style={style.button} />
      </NavLink>
    </div>
  );
 }
}

export default BoutonEditer;
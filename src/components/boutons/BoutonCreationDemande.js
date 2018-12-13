import React, { Component } from 'react';
import { Button, Tooltip } from 'antd';
import { NavLink } from 'react-router-dom';
import { CREATE_DEMAND } from '../../router/routes'

const style = {
  button: {
    position: 'fixed',
    right: '40px',
    bottom: '40px',
    width: '50px',
    height: '50px'
  },
  title: {
    textAlign: 'center'
  }
}

class BoutonCreationDemande extends React.Component {
  render(){
    var title = <div style={style.title}>
      Besoin d'aide ? <br/>
      Créez une demande
    </div>
   	return (
  	<div>
      <NavLink to={CREATE_DEMAND}>
       <Tooltip placement="topLeft" title={title} arrowPointAtCenter>
        <Button type="primary" shape="circle" icon="plus" size="large" style={style.button} />
       </Tooltip>
      </NavLink>
    </div>
  );
 }
}

export default BoutonCreationDemande;
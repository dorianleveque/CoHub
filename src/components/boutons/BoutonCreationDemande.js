import React, { Component } from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { CREATE_DEMAND } from '../../router/routes'


class BoutonCreationDemande extends React.Component {
  render(){
   	return (
  	<div>
       <NavLink to={CREATE_DEMAND}>
        <Button type="primary">Demander de l'aide</Button>
      </NavLink>
    </div>
  );
 }
}

export default BoutonCreationDemande;
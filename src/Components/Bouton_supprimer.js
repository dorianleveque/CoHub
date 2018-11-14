import React, { Component } from 'react';
import { Popconfirm, message, Button } from 'antd';

const text = 'Êtes-vous sûr de vouloir supprimer cette demande';

function confirm() {
  message.info('Demande supprimer');
}

function decline() {
	message.info('Demande nom supprimer');
}


class Bouton_supprimer extends React.Component {
  render(){
   	return (
  	<div style={{ width: 70, float: 'left' }}>
      <Popconfirm placement="left" title={text} onConfirm={confirm} onCancel = {decline} okText="Oui" cancelText="Non">
        <Button icon={"delete"}></Button>
      </Popconfirm>
    </div>
  );
 }
}

export default Bouton_supprimer;
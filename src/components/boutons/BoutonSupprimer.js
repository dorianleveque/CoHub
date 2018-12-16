import React, { Component } from 'react';
import { Popconfirm, Button } from 'antd';

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

class BoutonSupprimer extends Component {
  render(){
    const text = 'Êtes-vous sûr de vouloir supprimer cette demande'; 
   	return (
  	<div style={{ width: 70, float: 'left' }}>
      <Popconfirm placement="left" title={text} onConfirm={this.props.onConfirm} onCancel={this.props.onCancel} okText="Oui" cancelText="Non">
        <Button type="primary" shape="circle" icon="delete" size="large" style={style.button} />
      </Popconfirm>
    </div>
  );
 }
}

export default BoutonSupprimer;
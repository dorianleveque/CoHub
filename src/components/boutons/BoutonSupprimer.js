import React, { Component } from 'react';
import { Popconfirm, Button, Icon } from 'antd';

const style = {
  button: {
    position: 'fixed',
    right: '40px',
    bottom: '40px',
    width: '50px',
    height: '50px',
    color: '#fff',
    backgroundColor: '#ff4d4f',
    borderColor: '#ff4d4f'
  },
  title: {
    textAlign: 'center'
  }
}

class BoutonSupprimer extends Component {
  render(){
    const text = <div style={{width: '160px'}}>Êtes-vous sûr de vouloir supprimer cette demande</div>
   	return (
  	<div style={{ width: 70, float: 'left' }}>
      <Popconfirm placement="left" title={text} onConfirm={this.props.onConfirm} onCancel={this.props.onCancel} okText="Oui" cancelText="Non" icon={<Icon type="question-circle-o" style={{ color: 'red' }}/>} >
        <Button type="primary" shape="circle" type="danger" icon="delete" size="large" style={style.button} />
      </Popconfirm>
    </div>
  );
 }
}

export default BoutonSupprimer;
import React, { Component } from 'react';
import { Card, Col, Row, Tag, Icon, Divider } from 'antd';
const { Meta } = Card;
class DemandeCard extends Component {

  render() {

    return (
      <div style={{ overflow: 'hidden', width: '250px' }}>
        <div style={{ marginTop: '40px', width: '254px', height: '152px', marginLeft: '10px', marginRight: '10px', backgroundColor: '#FFF', overflowY: 'scroll', textOverflow: 'ellipsis' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} >
            <div style={{ overflow: 'hidden', wordWrap: 'break-word', whiteSpace: 'normal', marginLeft: '5px', fontWeight: 'bold' }} >This is  a long long long title test</div>
            <div style={{ marginRight: '5px' }}> <Icon type="car" theme="twoTone" /></div>
          </div>
          <div style={{ fontSize: '8px', color: '#1890ff', overflow: 'hidden', textAlign: 'center', marginTop: '9px' }}>Rodrigo Le Phase | Princeu</div>
          <div style={{ marginTop: '10px', marginLeft: '10px', marginRight: '10px' }} >
            <p style={{ fontSize: '11px', textAlign: 'justify' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.This is  ad
          </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DemandeCard;




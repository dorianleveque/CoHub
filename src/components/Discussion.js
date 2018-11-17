import React, { Component } from 'react';
import {Card, Icon} from 'antd';

const { Meta } = Card;

class Discussion extends React.Component {

  render() {
    return (
        <Card style={{ width: 300, marginTop: 13 }}>
          <Meta
            avatar = { <Icon type="user" />}
              title = 'Prenom "surnom"  Nom'
              description="Réponces"
          />
        </Card>
    );
  }
}

export default Discussion;
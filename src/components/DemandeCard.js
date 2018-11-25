import React, { Component } from 'react';
import { Card, Col, Row, Tag } from 'antd';
const { Meta } = Card;
class DemandeCard extends Component {

  render() {
    return (
      <Col span={6} offset={2}>
        <div style={{ textAlign: 'left', fontSize: '15' }}>
          <Card
            style={{ width: 270, height: 150, fontSize: '8px', textAlign: 'right' }}
            cover={<Tag color="blue" style={{ width: 'auto', marginTop: '8px', fontSize: '8px', cursor: 'default' }}>Covoiturage</Tag>}
          >
            <Meta
              style={{ textAlign: 'center', fontSize: '15' }}
              title="Trajet Paris / Brest"
              description="Jean Pierre | Poney"
            />
            <br />
            <div style={{ textAlign: 'center', fontSize: '12px' }}>
              <Row>
                Description ...
              </Row>
              <Row>
                Description ...
              </Row>
              <Row>
              </Row>
            </div>

          </Card>
        </div>
      </Col>
    );
  }
}

export default DemandeCard;






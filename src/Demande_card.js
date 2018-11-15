import React, { Component } from 'react';
import './App.css';
import { Card , Col , Row, Tag} from 'antd';
const { Meta } = Card;
class Demande_card extends Component {

  render()
  {
    return (
		<Col span= {6} offset = {2}> 
		<div style={{textAlign :'center' , fontSize : '15'}}> 
        <Card
    style={{ width: 275 , height :150 , fontSize : '8px' }}
      >
      <Meta
        title="Trajet Paris / Brest"
        description = "Jean Pierre | Poney"
        />
        <br/>
        <div style={{fontSize : '12px'}}> 
        <Row>
            Description ...
        </Row>
        <Row>
            Description ...
        </Row>
        <Row>
            Description ...
        </Row>
        <Row>
            <Col offset ={20} span ={4} > <Tag color = "blue" style={{fontSize : '8px'}}>Covoiturage</Tag></Col>
        </Row>
           </div>
      
  </Card>
  </div>
		</Col>
    );
  }
}

export default Demande_card;






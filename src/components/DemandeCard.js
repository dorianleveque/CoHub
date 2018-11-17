import React, { Component } from 'react';
import { Card , Col , Row, Tag} from 'antd';
const { Meta } = Card;
class DemandeCard extends Component {

  render()
  {
    return (
		<Col span= {6} offset = {2}> 
		<div style={{textAlign :'center' , fontSize : '15'}}> 
        <Card
    style={{ width: 275 , height :150 , fontSize : '8px' }}
	    extra = {<Tag color = "blue" style={{fontSize : '8px'}}>Covoiturage</Tag>}
        title="Trajet Paris / Brest"
      >
      <Meta
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
        </Row>
           </div>
      
  </Card>
  </div>
		</Col>
    );
  }
}

export default DemandeCard;






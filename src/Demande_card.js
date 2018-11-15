import React, { Component } from 'react';
import './App.css';
import { Card , Col} from 'antd';

class Demande_card extends Component {

  render()
  {
    return (
		<Col span= {6} offset = {2}> 
		<div style={{textAlign :'center'}}> 
        <Card
    title="Paris Brest"
    style={{ width: 300 }}
  >
    <p>Test</p>
    <p>Test 2 </p>
    <p>Test 3</p>
  </Card>
  </div>
		</Col>
    );
  }
}

export default Demande_card;






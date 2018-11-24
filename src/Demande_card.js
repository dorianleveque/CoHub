import React, { Component } from 'react';
<<<<<<< Updated upstream:src/Demande_card.js
import './App.css';
import { Card , Col , Row, Tag} from 'antd';
const { Meta } = Card;
class Demande_card extends Component {
=======
import { Card , Col , Row, Tag, Icon, Divider} from 'antd';
const { Meta } = Card;
class DemandeCard extends Component {
  constructor(){
    super();
    this.state = {hover : false}
>>>>>>> Stashed changes:src/components/DemandeCard.js

  }
   toggleHover = () => {
    this.setState({hover: !this.state.hover})
  }

  render(){

  var linkStyle;

    if (this.state.hover) {
      linkStyle = {marginTop: '20px' , width:'250px', marginLeft: '10px', marginRight : '10px', backgroundColor:'#FFF', overflow: 'hidden' , textOverflow: 'ellipsis'};
    } else {
      linkStyle = {marginTop: '20px' , width:'250px', height:'140px', marginLeft: '10px', marginRight : '10px', backgroundColor:'#FFF', overflow: 'hidden' , textOverflow: 'ellipsis'};
    }
  
    return (
		<div style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} > 
      <div style={{display : 'flex' , justifyContent : 'space-between', width:'100%'}} >
          <div style={{overflow:'hidden' , wordWrap:'break-word' , whiteSpace: 'normal', marginLeft :'5px' , fontWeight: 'bold' }} >This is  a long title test</div> 
          <div style = {{marginRight : '5px'}}> <Icon  type="car" theme="twoTone"/></div>
        </div>
        <div style = {{fontSize : '8px', color: '#1890ff', overflow:'hidden' , textAlign :'center', marginTop : '9px'}}>Rodrigo Le Phase | Princeu</div>
        <div style ={{marginTop : '10px' , marginLeft : '5px' }} >   <p style={{ overflow:'hidden', fontSize :'11px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.This is  ad 
        </p>
        </div>
  </div>
    );
  }
}

export default Demande_card;






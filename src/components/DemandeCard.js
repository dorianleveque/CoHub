import React, { Component } from 'react';
import { Icon } from 'antd';
import User from "../classes/User"
class DemandeCard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title : this.props.args.title,
			author : this.props.args.author,
			description : this.props.args.description,
			category : this.props.args.category,
			id : this.props.args.key
	};
	}

   render() {
	let author = this.state.author 
	let iconType ;
	let userInfo = author.getName()+" " + author.getSurname() + " | " + author.getNickname()
	  console.log(this.state.category)
	if (this.state.category === "CarPooling" )
	   {
		   iconType = "car"

	  	 }	

	   if (this.state.category === "Study" )
	   {


		   iconType = "book"


		}

	   if  (this.state.category === "Sharing") 
	   {
		   iconType = "interation"

		}
	  console.log(iconType)



    return (
      <div style={{ overflow: 'hidden', width: '250px', margin: '0px 20px' }}>
        <div style={{ marginTop: '40px', width: '250px', height: '120px', backgroundColor: '#FFF', overflowY: 'scroll', textOverflow: 'ellipsis' }}>
          <div style={{ display: 'flex', width: '100%' }} >
            	<div style={{  flexGrow : "1" ,overflow: 'hidden', wordWrap: 'break-word', whiteSpace: 'normal', fontWeight: 'bold' , textAlign :'center' }} >
	    	{this.state.title}
	    	</div>
            	<div> 
	    		<Icon type={iconType} theme="twoTone" />
	    	</div>
          </div>
          <div style={{ fontSize: '11px', color: '#1890ff', overflow: 'hidden', textAlign: 'center', marginTop: '9px' }}>
	    {userInfo}
	  </div>
          <div style={{ marginTop: '10px', marginLeft: '10px', marginRight: '10px' }} >
            	<p style={{ fontSize: '12px', textAlign: 'justify' }}>
	    		{this.state.description}
          	</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DemandeCard;




import React, { Component } from 'react'
import {Layout} from 'antd'
import Top from '../components/Top'
import User from '../classes/User'
import Message from '../classes/Message'
import TicketListControleur from '../classes/TicketListControleur'
import TicketCarPooling from '../classes/TicketCarPooling';


const { Content } = Layout

class NotFoundPage extends Component {
  
  render() 
  {
    var u1 = new User (1, "Anouk", "Chevallier", "Toupihy");
    var m1 = new Message(null, "text", u1, null);
    //m1.save();
    var tc1 = new TicketCarPooling(null, "title", "description", null , u1, "departurLocation", "arrivalLocation", "departurTime", "arrivalTime", 1, null);
    tc1.getConversation().addMessage(m1)
    tc1.save();
    
    
    return (
      <Layout>
        <Top />
        <Content style={{ paddingTop: '60px' }}>
          404 Page not found
        </Content>
      </Layout>
    )
  }
}

export default NotFoundPage
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
    console.log("ok");

    var u1 = new User(1,"Anouk", "Chevallier", "Toupihy");
    var tc1 = new TicketCarPooling(1, "title", "description", null, u1, "departurLocation", "arrivalLocation", "departurTime", "arrivalTime", 4, 1);
    var options = {departurLocation : "departurLocation1", arrivalLocation : "arrivalLocation1", departurTime  : "departurTime1", arrivalTime : "arrivalTime1", places : 4};
    u1.editTicket(tc1, options);
    console.log(tc1.getDeparturTime());

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
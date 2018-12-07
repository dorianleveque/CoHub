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
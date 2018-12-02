import React, { Component } from 'react'
import {Layout} from 'antd'
import Top from '../components/Top'
import User from '../classes/User'

const { Content } = Layout

class NotFoundPage extends Component {
  
  render() 
  {
    console.log("ok");

    var u1 = new User(1,"Anouk", "Chevallier", "Toupihy")
    console.log(u1.getId())
    console.log (u1.getName())
    console.log (u1.getNickname())
    console.log (u1.getSurname())

    u1.setNickname("J'ai encore tout casser")
    u1.save()
    console.log (u1.getNickname())


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
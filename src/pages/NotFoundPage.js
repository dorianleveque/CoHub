import React, { Component } from 'react'
import {Layout} from 'antd'
import Top from '../components/Top'

const { Content } = Layout

class NotFoundPage extends Component {
  render() {
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
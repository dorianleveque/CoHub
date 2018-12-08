import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Row, Col, Icon } from 'antd'
import Top from '../../components/Top'
import { SessionStore } from '../../stores';

const { Content, Footer } = Layout

const style = {
  layout: {
    height: '100vh'
  },
  content: {
    height: '100%'
  },
  top: {
    backgroundColor: 'red'
  }
}


class TestPageDodo extends Component {

  static contextType = SessionStore
  render() {
    //let auth = this.context
    //auth.testUser()
    //.then((result) => console.log(result))


    return (
      <Layout style={style.layout} >
        <Top style={style.top} />
        <Content >
          <Row type='flex' align='middle' justify='center' style={style.content} >
            <Col>
              <Row gutter={50} type='flex' align='middle' justify='space-around'>
                <Col sm={14} xs={22} >
                  <h1>TEST PAGE</h1>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
        <Footer></Footer>
      </Layout>
    )
  }
}

export default TestPageDodo
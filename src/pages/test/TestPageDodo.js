import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Row, Col, Button } from 'antd'
import Top from '../../components/Top'
import { SessionStore } from '../../stores';
import TicketListControleur from '../../classes/TicketListControleur';

const { Content, Footer } = Layout

const style = {
  content: {
    height: '100%'
  },
  top: {
    backgroundColor: 'red'
  }
}


class TestPageDodo extends Component {

  static contextType = SessionStore

  runTestFunction() {
    let tlc = new TicketListControleur()
    /*tlc.retriveTicket('-LTIgZkovDgwTJQpoO0X').then((value) => {
      console.log(value)
    })
    .catch((error) => console.log(error))*/
    tlc.searchTickets(2, 12, 'CarPooling').then((values) => {
      console.log(values)
    })
    /*tlc.searchUser('-LTIgZkWXbHTiJDPx4SE').then((values) => {
      console.log(values)
    })*/
  }

  render() {
    return (
      <Layout>
        <Top style={style.top} />
        <Content >
          <Row type='flex' align='middle' justify='center' style={style.content} >
            <Col>
              <Row gutter={50} type='flex' align='middle' justify='space-around'>
                <Col sm={14} xs={22} >
                  <h1>TEST PAGE</h1>
                  <Button onClick={this.runTestFunction} >Test</Button>
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
import React, { Component } from 'react'
import SignInForm from '../components/forms/SignInForm'
import Top from '../components/Top'
import { Layout, Row, Col, Card } from 'antd';
import cohub from '../images/CoHub.png'

const { Content, Footer } = Layout;
const { Meta } = Card;
const style = {
  layout: {
    height: '100vh'
  },
  content: {
    height: '100%'
  },
  card: {
    height: '440px'
  },
  frame: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '20px'
  },
  img: {
    width: '90px',
    height: 'auto',
    position: 'relative'
  }
}

class SignInPage extends Component {
  render() {
    return (
      <Layout style={ style.layout }>
        <Top/>
        <Content>
          <Row type='flex' align='middle' justify='center' style={ style.content } >
            <Card 
              cover={
                <div style={ style.frame } >
                  <img alt="cohub" src={ cohub } style={ style.img } />
                </div> }
              style={ style.card } 
            >
              <Meta title="Se connecter à CoHub" />
              <br/>
              <SignInForm routerHistory={this.props.history} />
            </Card>
          </Row>
        </Content>
        <Footer></Footer>
      </Layout>
    )
  }
}

export default SignInPage;

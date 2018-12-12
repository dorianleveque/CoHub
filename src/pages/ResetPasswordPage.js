import React, { Component } from 'react'
import Top from '../components/Top'
import { Layout, Row, Card } from 'antd';
import ResetPasswordForm from '../components/forms/ResetPasswordForm'
import Bottom from '../components/Bottom'
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
    minWidth: '320px',
    maxWidth: '400px'
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

class ResetPasswordPage extends Component {
  render() {
    return (
      <Layout style={ style.layout } >
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
              <Meta title="Ré-initialisation mot de passe" />
              <br/>
              <ResetPasswordForm routerHistory={this.props.history} />
            </Card>
          </Row>
        </Content>
        <Bottom/>
      </Layout>
    )
  }
}

export default ResetPasswordPage;

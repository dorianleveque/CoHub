import React, { Component } from 'react'
import SignInForm from '../components/forms/SignInForm'
import Top from '../components/Top'
import Bottom from '../components/Bottom'
import { Layout, Row, Card } from 'antd';
import cohub from '../images/CoHub.png'

const { Content, Footer } = Layout;
const { Meta } = Card;

const style = {
  content: {
    height: '100%'
  },
  card: {
    minWidth: '320px',
    maxWidth: '400px',
    margin: '100px 0'
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

  constructor() {
    super()
    this.state = {
      title: 'Se connecter à CoHub'
    }
  }

  updateTitle = (lostPassword) => {
    this.setState({ 
      title: (lostPassword) ? 'Ré-initialiser son mot de passe' : 'Se connecter à CoHub' 
    })
  }

  /**
   * Affiche la page
   */
  render() {
    return (
      <Layout>
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
              <Meta title={ this.state.title } />
              <br/>
              <SignInForm routerHistory={ this.props.history } onUpdateTitle={ this.updateTitle } />
            </Card>
          </Row>
        </Content>
        <Bottom/>
      </Layout>
    )
  }
}

export default SignInPage;

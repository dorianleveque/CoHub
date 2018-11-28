import React, {Component} from 'react'
import SignUpForm from '../components/forms/SignUpForm'
import {Layout,  Row, Col, Card } from 'antd';
import Top from '../components/Top';
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
    width: '400px'
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

class SignUpPage extends Component {
    render() {
        return (
          <Layout style={ style.layout } >
            <Top/>
            <Content>
              <Row type='flex' align='middle' justify='center' style={style.content} >
                <Card 
                  cover={
                    <div style={ style.frame } >
                      <img alt="cohub" src={ cohub } style={ style.img } />
                    </div> }
                  style={ style.card } 
                >
                  <Meta title="S'inscrire à CoHub" />
                  <br/>
                  <SignUpForm routerHistory={this.props.history} />
                </Card>
              </Row> 
            </Content>
            <Footer></Footer>
          </Layout>
        )
    }
}

export default SignUpPage;

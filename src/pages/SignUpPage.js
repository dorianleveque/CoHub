import React, {Component} from 'react'
import SignUpForm from '../components/forms/SignUpForm'
import {Layout,  Row, Card } from 'antd';
import Top from '../components/Top';
import Bottom from '../components/Bottom'
import cohub from '../images/CoHub.png'

const { Content, Footer } = Layout;
const { Meta } = Card;

// style de la page
const style = {
  content: {
    height: '100%'
  },
  card: {
    minWidth: '320px',
    maxWidth: '400px',
    margin: '20px 0'
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

  /**
   * Affiche la page
   */
    render() {
        return (
          <Layout>
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
            <Bottom/>
          </Layout>
        )
    }
}

export default SignUpPage;

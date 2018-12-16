import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Row, Col, Icon } from 'antd'
import Top from '../components/Top'
import Bottom from '../components/Bottom'
import { HOME } from '../router/routes'

const { Content } = Layout

const style = {
  content: {
    marginTop: '80px',
    marginBottom: '120px'
  },
  linkBox: {
    position: 'relative',
    height: '30px',
    minWidth: '244px',
    marginTop: '20px',
    color: 'rgba(0, 0, 0, 0.8)',
    fontWeight: 'bold',
    fontSize: '14px'
  },
  link: {
    borderLeft: '3px solid rgba(0, 0, 0, 0.8)',
    paddingLeft: '5px'
  },
  compass: {
    keyFrame: `@keyframes dontPanic {
                  0%    { transform: rotate(20deg); }
                  10%   { transform: rotate(60deg); }
                  20%   { transform: rotate(100deg); }
                  30%   { transform: rotate(1deg); }
                  40%   { transform: rotate(45deg); }
                  65%   { transform: rotate(260deg); }
                  70%   { transform: rotate(320deg); }
                  80%   { transform: rotate(360deg); }
                  90%   { transform: rotate(30deg); }
                  100%  { transform: rotate(90deg); }
                }`,
    style: {
      fontSize: '110px',
      animation: 'infinite',
      animationName: 'dontPanic',
      animationDuration: '5s',
      animationTimingFunction: 'cubic-bezier(.46,.03,.52,.96)',
      animationDirection: 'alternate',
      animationPlayState: 'infinite'
    }
  }
}

class NotFoundPage extends Component {
  render() {
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(style.compass.keyFrame, styleSheet.cssRules.length);
    return (
      <Layout>
        <Top />
        <Content >
          <Row type='flex' align='middle' justify='center' style={ style.content } >
            <Col>
              <Row gutter={50} type='flex' align='middle' justify='space-around'>
                <Col sm={14} xs={22} >
                  <div style={{ width: 'auto', textAlign: "center" }}>
                    <span style={{ fontSize: '150px' }} >4</span>
                    <Icon type="compass" style={ style.compass.style } />
                    <span style={{ fontSize: '150px' }} >4</span>
                  </div>
                  <br/>
                  <h1>Vous vous êtes perdu ?</h1>
                  <div>
                    <b>Laissez nous vous tendre une main</b> en 
                    vous suggérant quelques pages 
                    pour vous permettre de retrouver votre chemin ;)
                  </div>
                  <NavLink to={HOME}>
                    <div style={ style.linkBox } >
                      <div style={style.link} >Accueil</div>
                    </div>
                  </NavLink>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
        <Bottom/>
      </Layout>
    )
  }
}

export default NotFoundPage
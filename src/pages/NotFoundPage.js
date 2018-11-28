import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Row, Col, Icon } from 'antd'
import Top from '../components/Top'
import { HOME } from '../router/routes'

const { Content } = Layout

const style = {
  subtitle: {
    position: 'relative',
    height: '30px',
    minWidth: '244px',
    marginTop: '20px',
    color: 'rgba(0, 0, 0, 0.8)',
    fontWeight: 'bold',
    fontSize: '16px',
    pseudoElement: {
      position: 'absolute',
      bottom: 2,
      width: '100px',
      height: '4px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    }
  },
  link: {
    borderLeft: '3px solid black',
    paddingLeft: '5px'
  }
}

class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <Top />
        <Content >
          <Row type='flex' align='middle' justify='center' >
            <Col>
              <Row gutter={50} type='flex' align='middle' justify='space-around'>
                <Col sm={14} xs={22} >
                  <div style={{ width: 'auto', textAlign: "center" }}>
                    <span style={{ fontSize: '150px' }} >4</span>
                    <Icon spin type="compass" style={{ fontSize: '110px' }} />
                    <span style={{ fontSize: '150px' }} >4</span>
                  </div>
                  <br/>
                  <h1>Vous vous êtes perdu ?</h1>
                  <div>
                    <b>Laissez nous vous tendre une main</b> à 
                    notre tour en vous suggérant quelques pages 
                    pour vous permettre de retrouver votre chemin ;)
                  </div>
                  <NavLink to={HOME}>
                    <div style={{...style.subtitle, fontSize: '14px'}} >
                      <div style={style.link} >Accueil</div>
                    </div>
                  </NavLink>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default NotFoundPage
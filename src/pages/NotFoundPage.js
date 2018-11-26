import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'
import Top from '../components/Top'
import { HOME } from '../router/routes'
import errorImg from '../images/404Error.png'

const { Content } = Layout

const style = {
  image : {
    height: 'auto',
    width: '100%',
    marginBottom: '20px',
    filter: 'opacity(.8) drop-shadow(0 0 0 rgb(24, 144, 255)) saturate(200%)'
  },
  title: {
    minWidth: '244px',
    padding: '5px',
    paddingLeft: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px'
  },
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
  text: {
    position: 'relative',
    minWidth: '244px',
    marginTop: '20px',
    fontSize: '14px',
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
        <Content style={{ paddingTop: '60px' }}>
          <Row>
            <Col
              xs={{ offset: 1, span: 22 }}
              sm={{ offset: 3, span: 18 }}
            >
            <Row gutter={50} >
              <Col sm={12} >
                <img alt='not found img' src={errorImg} style={style.image}/>
              </Col>
              <Col sm={12} >
                <div style={style.title} >Cette page n'existe plus.</div>
                <div style={style.subtitle} >
                  <div>Les oubliettes, vous connaissez ?</div>
                  <span style={style.subtitle.pseudoElement} ></span>
                </div>
                <div style={style.text} >
                  <p>Un endroit que vous rencontrerez lorsque nous n'avons pas trouvé la recherche que vous cherchiez.</p>
                  <p>Bref, vous semblez perdu(e).</p>
                  <p><b>Laissez nous vous tendre une main</b> à notre tour en vous suggérant quelques pages pour vous permettre de retrouver votre chemin ;)</p>
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
import React, {Component} from 'react'
import Connection_Form from '../Components/Connexion'
import {Layout,  Row, Col } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class LoginPage extends Component {
    render() {
        return (

          <Layout>
            <Header>Header</Header>
          <Layout style = {{background: '#ffffff'}}>
              <Content style={{paddingTop: '60px'}}>
                <Row>
                  <Col 
                    xs={{offset:1, span:22}} 
                    sm={{offset:6 ,span:12}} 
                    md={{offset:7, span:10}} 
                    lg={{offset:8, span:8}} 
                    xl={{offset:9, span:6}}
                  >
                    <Connection_Form routerHistory={this.props.history} />
                  </Col>
                </Row> 
              </Content>
          </Layout>
          </Layout>
        )
    }
}

export default LoginPage;

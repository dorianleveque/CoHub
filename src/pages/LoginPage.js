import React, {Component} from 'react'
import Connection_Form from '../components/loginForm'
import {Layout,  Row, Col, Card } from 'antd';

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
                    <Card title="Se connecter" style={{ width: 300 }} >
                      <Connection_Form routerHistory={this.props.history} />
                    </Card>
                  </Col>
                </Row> 
              </Content>
          </Layout>
          </Layout>
        )
    }
}

export default LoginPage;

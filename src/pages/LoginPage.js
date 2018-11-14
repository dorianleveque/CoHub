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
                  <Col span={8}></Col>
                  <Col span={8}>
                    <Connection_Form/>
                  </Col>
                  <Col span={8}></Col>
                </Row> 
              </Content>
          </Layout>
          </Layout>
        )
    }
}

export default LoginPage;

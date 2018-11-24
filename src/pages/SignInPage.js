import React, { Component } from 'react'
import SignInForm from '../components/form/SignInForm'
import Top from '../components/Top'
import { Layout, Row, Col, Card } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class SignInPage extends Component {
  render() {
    return (

      <Layout>
        <Top/>
        <Content style={{ paddingTop: '60px' }}>
          <Row>
            <Col
              xs={{ offset: 1, span: 22 }}
              sm={{ offset: 6, span: 12 }}
              md={{ offset: 7, span: 10 }}
              lg={{ offset: 8, span: 8 }}
              xl={{ offset: 9, span: 6 }}
            >
              <Card title="Authentification" style={{ width: 300 }} >
                <SignInForm routerHistory={this.props.history} />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default SignInPage;

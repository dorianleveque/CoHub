import React, { Component } from 'react';
import { Menu } from 'antd';
import { Layout } from 'antd';
const { Sider } = Layout;


class SiderMenu extends Component {
  constructor(props) { // constructuer de Top

    super(props);
    this.visible =  this.props.visible;
  }


  render() {

    return (

      <Sider style={{ background: '#fff' }} collapsed={this.props.visible} collapsedWidth={0} >
        <div style={{ verticalAlign: 'middle', textAlign: 'center', lineHeight: '70px', background: '#1890ff', color: '#fff', fontSize: '20px', height: '70px' }}> Categorie </div>
        <div>
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', background: '#fff' }}>
            <Menu.Item key="1">
              <span>Tout</span>
            </Menu.Item>

            <Menu.Item key="2">
              <span>Tutorat</span>
            </Menu.Item>

            <Menu.Item key="3">
              <span>Covoiturage</span>
            </Menu.Item>
            <Menu.Item key="4">
              <span>Prêt</span>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    );
  }
}


export default SiderMenu;
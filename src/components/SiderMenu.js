import React, { Component } from 'react';
import { Menu } from 'antd';
import { Layout } from 'antd';
const { Sider } = Layout;


class SiderMenu extends Component {
  constructor(props) { // constructuer de Top

    super(props);
    this.visible =  this.props.visible;
  }
//Add a funtion to call the function to search a category, something like onclick(value) => orderItems
	//add the props to the function ! TODO

	sortItems = (category) =>{
		this.props.sortItems(category)
	}

	changeCategory = (e) => {

		var key = e.key ;
		var cat ;

		if (key ==1) {
			cat ="";
		}

		if (key ==2) {
			cat ="Study";
		}


		if (key ==3) {
			cat ="CarPooling";
		}


		if (key ==4) {
			cat ="Sharing";
		}

		this.sortItems(cat);




	}

  render() {

    return (

      <Sider style={{ background: '#fff' }} collapsed={this.props.visible} collapsedWidth={0} >
        <div style={{ verticalAlign: 'middle', textAlign: 'center', lineHeight: '70px', background: '#1890ff', color: '#fff', fontSize: '20px', height: '70px' }}> Categorie </div>
        <div>
          <Menu mode="inline" defaultSelectedKeys={['1']} onClick={this.changeCategory} style={{ height: '100%', background: '#fff' }}>
            <Menu.Item key="1">
              <span>Tout</span>
            </Menu.Item>

            <Menu.Item key="2" >
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

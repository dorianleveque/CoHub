import React, { Component } from 'react';
import { Menu , Input} from 'antd';
import { Layout } from 'antd';
const { Sider } = Layout;

const Search = Input.Search;
const MenuItemGroup = Menu.ItemGroup

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



	searchItems = (value) => {
	  this.props.searchItems(value)
  	}

	changeCategory = (e) => {
		var key = parseInt(e.key);
		var cat ;

		if (key === 1) {
			cat ="";
		}

		else if (key === 2) {
			cat ="Study";
		}


		else if (key === 3) {
			cat ="CarPooling";
		}


		else if (key === 4) {
			cat ="Sharing";
		}
		
		else {
			return 0
		}
		
		this.sortItems(cat);




	}

  render() {

    return (

      <Sider style={{ background: '#fff' }} collapsed={this.props.visible} collapsedWidth={0} >
        <div style={{ verticalAlign: 'middle', textAlign: 'center', lineHeight: '70px', background: '#1890ff', color: '#fff', fontSize: '20px', height: '70px' }}> Filtrage </div>
        <div>
          <Menu mode="inline" defaultSelectedKeys={['1']} onClick={this.changeCategory} style={{ height: '100%', background: '#fff' }}>
	    <MenuItemGroup title = "Catégorie">    
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
            </MenuItemGroup>

	    <MenuItemGroup title = "Recherche">    
		<Menu.Item key="5">
	<Search
            onSearch={value => this.searchItems(value)}
            style={{ width: '130px'  }}/>
            </Menu.Item>
            </MenuItemGroup>


          </Menu>
        </div>
      </Sider>
    );
  }
}


export default SiderMenu;

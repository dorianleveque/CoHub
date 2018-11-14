import React, { Component } from 'react';
import './App.css';
import { Avatar, Skeleton, Switch, Card, Icon} from 'antd';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#e6f7ff', '#bae7ff', '#91d5ff', '##69c0ff'];
const { Meta } = Card;

class Discution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserList[0],
      color: colorList[0],
    };
  }

  changeUser = () => {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
      color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
    });
  }

  
  render() {
    return (
       <div>

        <Card
          style={{ width: 300, marginTop: 16 }}
        >
            <Meta
              avatar = { <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle'}} size="large"> {this.state.user.charAt(0)} </Avatar>}
              title = 'Nom + prenom + surnom'
              description="This is the description"
            />
        </Card>
      </div>
    );
  }
}

export default Discution;
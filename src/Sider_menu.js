import React, { Component } from 'react';
import './App.css';

import { Drawer, Button, Radio, Icon, Col ,  Row } from 'antd';

import { Layout } from 'antd';
const {  Sider } = Layout;
 // ajouter signal 

const RadioGroup = Radio.Group;

class Sider_menu extends Component {


  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };


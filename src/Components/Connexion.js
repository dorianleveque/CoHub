import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox} from 'antd';

const FormItem = Form.Item;


class Connexion extends Component {

  constructor() {
    super()
    this.state = {
      userNameField: {
        var: 'email',
        placeholder: 'adresse mail',
        rules: [{ required: true, message: 'une adresse mail est requise' }]
      },
      passWordField: {
        var: 'password',
        placeholder: 'mot de passe',
        rules: [{ required: true, message: 'un mot de passe est requis' }]
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem> 
          { 
            getFieldDecorator(this.state.userNameField.var, { rules: this.state.userNameField.rules })
            (<Input 
                prefix={ <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> } 
                placeholder={this.state.userNameField.placeholder} 
            />)
          }
        </FormItem>
        <FormItem>
          {
            getFieldDecorator(this.state.passWordField.var, { rules: this.state.passWordField.rules })
            (<Input 
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                type="password" 
                placeholder={this.state.passWordField.placeholder}
            />)
          }
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">Se connecter</Button>
        </FormItem>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(Connexion);


export default WrappedNormalLoginForm;

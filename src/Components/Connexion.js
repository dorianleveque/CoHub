import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox} from 'antd';
import {auth} from '../firebase'

const FormItem = Form.Item;


class Connexion extends Component {

  constructor() {
    super()
    this.state = {
      userNameField: {
        var: 'email',
        placeholder: 'adresse mail',
        rules: [
          { required: true, message: 'une adresse mail est requise' },
          { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , message: "Votre adresse mail est invalide"}
        ]
      },
      passWordField: {
        var: 'password',
        placeholder: 'mot de passe',
        rules: [
          { required: true, message: 'un mot de passe est requis' },
          { min: 8, message: "Votre mot de passe n'est pas assez long\n"}
        ]
      }
    }
  }

  onSubmit = (event) => {
    // on arrête la propagation de l'évènement
    event.preventDefault()
    this.props.form.validateFields((err, values) => {
      
      // Lorsqu'il n'y a pas d'erreur de saisie
      if (!err) {
        /* 
        on contacte la base de donnée afin vérifier si les identifiants
        rentrés sont correct
        */
        const { email, password } = values
        const history = this.props.routerHistory

        auth.doSignInWithEmailAndPassword(email, password)
            .then(()=>{
              /* 
              si la vérification avec la base de données est correct
              alors on crée l'objet user et redirige l'utilisateur sur la page HOME
              */
              history.goBack()
            })
            .catch(error => {
              console.log(error)
            });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.onSubmit} className="login-form">
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

import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
import {auth} from '../../firebase'

const FormItem = Form.Item;


class LoginForm extends Component {

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
      },
      submitButtonLoading: false
    }
  }

  onSubmit = (event) => {
    // on arrête la propagation de l'évènement
    event.preventDefault()
    // on informe l'utilisateur que sa demande à été prise en compte par un loader
    this.setState({ submitButtonLoading: true })

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
              message.success("Vous êtes maintenant connecté")
              history.goBack()
            })
            .catch(error => {
              this.setState({ submitButtonLoading: false })
              if (error.code === "auth/wrong-password") { 
                message.error("Votre identifiant et/ou votre mot de passe sont incorrects") 
              }
              else { 
                message.error(error.message)
              }
            })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout='vertical' onSubmit={this.onSubmit} className="login-form">
        <FormItem label={'Nom'}> 
          <Input
            addonBefore={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
          />
        </FormItem>
        <FormItem>
          <Input addonBefore={'Prénom'} />
        </FormItem>
        <FormItem>
          <Input addonBefore={'Adresse mail'} />
        </FormItem>
        <FormItem>
          <Input addonBefore={'Mot de passe'} />
        </FormItem>
        <FormItem>
          <Input addonBefore={'Confirmer le mot de passe'} />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.submitButtonLoading} >Se connecter</Button>
        </FormItem>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(LoginForm);


export default WrappedNormalLoginForm;

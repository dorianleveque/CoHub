import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { SIGN_IN } from '../../router/routes'
import { SessionStore } from '../../stores';

const FormItem = Form.Item;

class ResetPasswordForm extends Component {

  static contextType = SessionStore
  constructor() {
    super()
    this.state = {
      fields: [
        {
          var: 'password',
          options: {
            rules: [
              { required: true, message: 'un mot de passe est requis' },
              { min: 8, message: "Votre mot de passe n'est pas assez long"}
            ]
          },
          component: <Input
                      type='password'
                      prefix={ <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} /> } 
                      placeholder='Mot de passe' />
        },
        {
          var: 'confPassword',
          placeholder: 'Confirmez votre mot de passe',
          options: {
            rules: [
              { required: true, message: 'un mot de passe est requis' },
              { validator: (rule, value, callback) => {
                const { password } = this.props.form.getFieldsValue()
                let errors = [];
                if (password !== value) {
                  errors.push(new Error())
                }
                callback(errors)
              }, message: "Votre mot de passe n'est pas identique"}
            ]
          },
          component: <Input
                      type='password'
                      prefix={ <Icon type="lock" theme='filled' style={{ color: 'rgba(0,0,0,.25)' }} /> } 
                      placeholder='Confirmez votre mot de passe' /> 
        }
      ],
      submitButtonLoading: false,
      validateStatus: ''
    }
  }


  /**
   * Appelé à chaque fois que le formulaire est soumis 
   */
  onSubmit = (event) => {
    // on arrête la propagation de l'évènement
    event.preventDefault()
    this.setState({ submitButtonLoading: true, validateStatus: '' })

    this.props.form.validateFields((err, values) => {
      // Lorsqu'il n'y a pas d'erreur de saisie
      if (!err) {
        // on récupère notre authentification, les valeurs
        // et une référence sur le router 
        const auth = this.context
        const { password } = values
        const history = this.props.routerHistory
        let params = new URLSearchParams(history.location.search);

        // on modifie le mot de passe avec le nouveau
        auth.confirmPasswordReset(params.get('oobCode'), password)
          .then(() => {
            this.setState({ submitButtonLoading: false })
            message.success("Votre mot de passe à été modifié avec succès")

            // on redirige sur la page de connection
            history.push(SIGN_IN)
          })
          .catch(error => {
            this.setState({ submitButtonLoading: false, validateStatus: 'error' })
            switch(error.code) {
              case "auth/user-not-found":
                message.error("Aucun compte ne correspond à cet identifiant. Le compte a dû être supprimé")
              break;
              default:
                message.error("L'URL est invalide. Ceci peut arriver si l'url est mal formé, a expiré, ou a déjà été utilisé.")
            }
          })
      }
      else {
        this.setState({ submitButtonLoading: false })
      }
    });
  }

  /**
   * Afficher le formulaire
   */
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.onSubmit} >
        {
          this.state.fields.map((element, index) => (
            <FormItem
              key={index}
              validateStatus={this.state.validateStatus} 
            > {
                getFieldDecorator(element.var, element.options) (element.component)
              }
            </FormItem>
          ))
        }
        <Button type="primary" htmlType="submit" loading={this.state.submitButtonLoading} >Ré-initialiser le mot de passe</Button>
      </Form>
    );
  }
}

export default Form.create()(ResetPasswordForm);;

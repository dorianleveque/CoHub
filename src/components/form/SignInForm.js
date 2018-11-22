import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col, message} from 'antd';
import {auth} from '../../firebase'
import {SIGN_UP} from '../../router/routes'

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


  /**
   * Fonction déclenchée lors de la soumission du formulaire
   * Un loader sur le bouton informe l'utilisateur du traitement de sa demande
   * 
   * Après vérification de la validité des différents champs du formulaire, 
   * s'il n'y a pas d'erreur, on contacte la base de donnée afin vérifier si 
   * les identifiants rentrés sont correct
   * 
   * - si la vérification avec la base de données est correct
   *   alors on crée l'objet user et redirige l'utilisateur sur la page HOME
   * - sinon on lui affiche un message d'erreur
   */
  onSubmit = (event) => {
    // on arrête la propagation de l'évènement
    event.preventDefault()
    this.setState({ submitButtonLoading: true })

    this.props.form.validateFields((err, values) => {
      
      // Lorsqu'il n'y a pas d'erreur de saisie
      if (!err) {
        const { email, password } = values
        const history = this.props.routerHistory

        auth.doSignInWithEmailAndPassword(email, password)
            .then(()=>{
              this.setState({ submitButtonLoading: false })
              message.success("Vous êtes maintenant connecté")
              history.goBack()
            })
            .catch(error => {
              this.setState({ submitButtonLoading: false })
              message.error("Votre identifiant et/ou votre mot de passe sont incorrects")
            })
      }
      else{
        this.setState({ submitButtonLoading: false })
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
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Rester connecter</Checkbox>
          )}
          
          <Row gutter={20}>
            <Col span={14}>
              <Button block type="primary"   htmlType="submit" className="login-form-button" loading={this.state.submitButtonLoading} >Se connecter</Button>
            </Col>
            <Col span={10}>
              <Button block type="secondary" href={SIGN_UP} className="login-form-button" >S'inscrire</Button>
            </Col>
          </Row>
          <a className="login-form-forgot" href="">Mot de passe oublié</a>
        </FormItem>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(LoginForm);


export default WrappedNormalLoginForm;
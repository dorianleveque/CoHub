import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, Row, Col, message} from 'antd';
import {SIGN_UP, HOME} from '../../router/routes'
import { SessionStore } from '../../stores';

const FormItem = Form.Item;


class SignInForm extends Component {

  static contextType = SessionStore
  constructor() {
    super()
    this.state = {
      fields: [
        {
          var: 'email',
          options: {
            rules: [
              { required: true, message: 'une adresse mail est requise' },
              { pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ , message: "Votre adresse mail est invalide"}
            ]
          },
          component: <Input 
                      prefix={ <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> } 
                      placeholder='adresse mail' 
                      />
        },
        {
          var: 'password',
          options: {
            rules: [
              { required: true, message: 'un mot de passe est requis' }
            ]
          },
          component: <Input 
                      type='password'
                      prefix={ <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} /> } 
                      placeholder='mot de passe' 
                      />          
        },
        {
          var: 'remember',
          options: { 
            valuePropName: 'checked', 
            initialValue: true 
          },
          component: <Checkbox> Se souvenir de moi </Checkbox>
        }
      ],
      submitButtonLoading: false,
      lostPassword: false
    }
  }


  /**
   * Appelé à chaque fois que le formulaire est soumis 
   */
  onSubmit = (event) => {
    // on arrête la propagation de l'évènement
    event.preventDefault()
    this.setState({ submitButtonLoading: true })

    // si le mot de passe n'est pas perdu, on authentifie le user
    // sinon on reset son mot de passe
    if (!this.state.lostPassword) {
      this.signIn()
    }
    else {
      this.resetPassword()
    }
  }

  /**
   * Authentifie le user si pas erreur
   */
  signIn() {
    this.props.form.validateFields((err, values) => {
      
      // Lorsqu'il n'y a pas d'erreur de saisie
      if (!err) {
        // on récupère notre authentification, 
        // les valeurs des champs et une référence sur le router
        const auth = this.context
        const { email, password, remember } = values
        const history = this.props.routerHistory
        
        // on authentifie le user
        auth.signInWithEmailAndPassword(email, password, remember)
            .then(()=>{
              this.setState({ submitButtonLoading: false })
              message.success("Vous êtes maintenant connecté")

              // on redirige ensuite le user soit sur la page d'acceuil, 
              // soit sur la page précédente
              if (history.action === 'PUSH') {
                history.goBack()
              } else {
                history.push(HOME)
              }
            })
            .catch(error => {
              this.setState({ submitButtonLoading: false })
              switch(error.code) {
                case "auth/user-not-found":
                  message.error("Aucun compte ne correspond à cet identifiant. Le compte a dû être supprimé")
                break;
                case "user-data-not-found":
                  message.error("Votre compte est cassé, vos informations d'identification ont été corrompu. Merci d'en adresser le problème à l'équipe de CoHub")
                break;
                default:
                  message.error("Impossible de vous connecter. Réessayez plus tard")
              }
            })
      }
      else{
        this.setState({ submitButtonLoading: false })
      }
    })
  }

  /**
   * Reset le mot de passe si pas erreur
   */
  resetPassword() {
    // on récupère notre authentification 
    const auth = this.context
    this.props.form.validateFields((err, values) => {
      
      // Lorsqu'il n'y a pas d'erreur de saisie
      if (!err) {
        const { email } = values
                       
        auth.sendPassWordResetWithEmail(email)
            .then(()=>{
              this.setState({ submitButtonLoading: false, lostPassword: false })
              this.props.onUpdateTitle(false)
              message.success("Envoyé")
            })
            .catch(error => {
              this.setState({ submitButtonLoading: false, lostPassword: false })
              this.props.onUpdateTitle(false)
              switch(error.code) {
                case "auth/user-not-found":
                  message.error("Aucun compte ne correspond à cet identifiant. Le compte a dû être supprimé")
                break;
                default:
                  message.error("Impossible d'envoyer. Réessayez plus tard")
              }
            })
      }
      else{
        this.setState({ submitButtonLoading: false })
      }
    })
  }

  /**
   * Evenement boutons
   */
  clickOnForgetPassword = (event) => {
    event.preventDefault()
    this.setState({ lostPassword: true })
    this.props.onUpdateTitle(true)
  }

  clickOnRememberPassword = (event) => {
    event.preventDefault()
    this.setState({ lostPassword: false })
    this.props.onUpdateTitle(false)
  }

  /**
   * Afficher le formulaire en fonction notamment
   * de l'état de la variable lostPassword
   */
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.onSubmit} >
      {
        this.state.fields.map((element, index) => {
          const formItem = <FormItem key={index} > 
                            {
                              getFieldDecorator(element.var, element.options) (element.component)
                            }
                          </FormItem>

          if (!this.state.lostPassword) {
            return formItem
          } 
          else {
            return (index === 0) ? formItem : null
          } 
        })
      }

        <Row gutter={20}>
          <Col span={14}>
            <Button block type="primary" htmlType="submit" loading={this.state.submitButtonLoading} >
              { (this.state.lostPassword) ? 'Envoyer' : 'Se connecter' }
            </Button>
          </Col>
          <Col span={10}>
            { (this.state.lostPassword) 
              ? null
              : <NavLink to={SIGN_UP} >
                  <Button block type="secondary" >S'inscrire</Button>
                </NavLink>
            }
          </Col>
        </Row>
        <Row style={{ marginTop: '5px', color: 'rgb(24, 144, 255)', cursor: 'pointer' }}>
            { (this.state.lostPassword)
              ? <span onClick={ this.clickOnRememberPassword } >Je me rappelle de mon mot de passe</span>
              : <span onClick={ this.clickOnForgetPassword }   >J'ai oublié mon mot de passe</span>
            }
        </Row>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(SignInForm);


export default WrappedNormalLoginForm;

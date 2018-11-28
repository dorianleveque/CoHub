import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { SIGN_IN } from '../../router/routes'
import { Form, Icon, Input, Button, Row, Col, Carousel, message, Steps} from 'antd';
import { SessionStore } from '../../stores';
//import {auth} from '../../firebase'

const FormItem = Form.Item;
console.log(FormItem)
const Step = Steps.Step;

class SignUpForm extends Component {

  static contextType = SessionStore
  constructor() {
    super()
    //this.carousel = React.createRef();
    this.state = {
      firstSlideFields: [
        {
          var: 'lastName',
          label: 'Votre nom',
          prefix: <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />,
          rules: [
            { required: true, message: 'votre nom est requis' }
          ]
        },
        {
          var: 'firstName',
          label: 'Votre prénom',
          prefix: <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />,
          rules: [
            { required: true, message: 'votre prénom est requis' }
          ]
        },
        {
          var: 'nickName',
          label: 'Votre surnom',
          prefix: <Icon type="tag" style={{ color: 'rgba(0,0,0,.25)' }} />,
          rules: []
        }
      ],
      secondSlideFields: [
        {
          var: 'email',
          label: 'adresse mail',
          prefix: <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />,
          rules: [
            { required: true, message: 'une adresse mail est requise' },
            { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , message: "Votre adresse mail est invalide"}
          ]
        },
        {
          var: 'password',
          label: 'mot de passe',
          prefix: <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />,
          rules: [
            { required: true, message: 'un mot de passe est requis' },
            { min: 8, message: "Votre mot de passe n'est pas assez long"}
          ]
        },
        {
          var: 'confPassword',
          label: 'Confirmez mot de passe',
          prefix: <Icon type="lock" theme='filled' style={{ color: 'rgba(0,0,0,.25)' }} />,
          rules: [
            { required: true, message: 'un mot de passe est requis' },
            { validator: (rule, value, callback) => {
              const { password } = this.props.form.getFieldsValue()
              if (password != value) {
                callback(new Error())
              }
            }, message: "Votre mot de passe ne correspond pas"}
          ]
        }
      ],
      disabledNextButton: true,
      fieldValidateStatus: '',
      stepIconLoading: false,
      carouselSlideIndex: 0
    }
  }

  onSubmit = (event) => {
    // on arrête la propagation de l'évènement
    event.preventDefault()
    // on informe l'utilisateur que sa demande à été prise en compte par un loader
    this.nextSlide()
    this.setState({ fieldValidateStatus: '' })
    
    // on récupère notre authentification
    const auth = this.context
    this.props.form.validateFields((err, values) => {
      // Lorsqu'il n'y a pas d'erreur de saisie
      if (!err) {
        const { 
          lastName, 
          firstName,
          nickName,
          email,
          password,
          confPassword
          } = values
          console.log(values)
          auth.createUserWithEmailAndPassword(email, password)
          .then( () => {
            this.setState({ fieldValidateStatus: 'sucess' })
          })
          .catch(error => {
            console.error(error)
            this.setState({ fieldValidateStatus: 'error' })
          })
        
      }
      
    });
  }

  returnBackTo(index) {
    if (index < this.state.carouselSlideIndex) {
      this.goToSlide(index)
    }
  }

  goToSlide(index) {
    if (index >= 0) {
      this.setState({ carouselSlideIndex: index, stepIconLoading: (index==2) })
      this.carousel.goTo(index)
    }
  }

  nextSlide() {
    this.goToSlide(this.state.carouselSlideIndex + 1)
  }

  prevSlide() {
    this.goToSlide(this.state.carouselSlideIndex - 1)
  }

  loadingIcon(b) {
    return (b) ? <Icon type="loading" /> : null
  }

  componentWillReceiveProps(){
    console.log(this.props.form.getFieldsValue())
    const { lastName, firstName } = this.props.form.getFieldsValue()
    if (lastName != undefined && firstName != undefined) {
      this.setState({ disabledNextButton: !(lastName.length && firstName.length) }) 
    }
    else {
      this.setState({ disabledNextButton: true })
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
        <div>
          <div style={{ position: 'absolute', left: -5 }}>
            <Steps size='small' labelPlacement='vertical' current={ this.state.carouselSlideIndex } >
                <Step style={{ cursor: 'pointer' }} onClick={ () => { this.returnBackTo(0)} }/* Vos infos *//>
                <Step style={{ cursor: 'pointer' }} onClick={ () => { this.returnBackTo(1)} }/* Vos identifiants */ />
                <Step icon={ this.loadingIcon(this.state.stepIconLoading) } status='finish'  /* Vérification*/ />        
            </Steps>  
          </div>

          <div style={{ paddingTop: '40px' }}>
            <Form onSubmit={this.onSubmit} >
              <Carousel dots={false} ref={node => (this.carousel = node) } >
                <div>
                  <h3>Vos informations: </h3>
                  { 
                    this.state.firstSlideFields.map((element, index) => (
                      <FormItem 
                        key={index}
                        fieldValidateStatus={this.state.fieldValidateStatus} 
                        label={element.label} 
                        colon={false} 
                      > { 
                          getFieldDecorator(element.var, { rules: element.rules })
                          (<Input prefix={ element.prefix } />)
                        }
                      </FormItem>
                    ))
                  }
                  
                  <div style={{ display: 'flex', alignItems: 'center' }} >
                    <Button disabled={ this.state.disabledNextButton } type='primary' onClick={ () => this.nextSlide() } >Suivant</Button>
                    <NavLink to={SIGN_IN} style={{ marginLeft: '10px' }} >
                      <span>J'ai déjà un compte</span>
                    </NavLink>
                  </div>
                </div>
                <div>
                  <h3>Vos identifiants: </h3>
                  { 
                    this.state.secondSlideFields.map((element, index) => (
                      <FormItem 
                        key={index}
                        fieldValidateStatus={this.state.fieldValidateStatus} 
                        label={element.label} 
                        colon={false} 
                      > { 
                          getFieldDecorator(element.var, { rules: element.rules })
                          (<Input prefix={ element.prefix } />)
                        }
                      </FormItem>
                    ))
                  }
                  <div style={{ display: 'flex', alignItems: 'center' }} >
                    <Button type='default' onClick={ ()=>{ this.prevSlide() } } >Précédent</Button>
                    <Button type='primary' htmlType="submit" style={{ marginLeft: '10px' }} >Suivant</Button>
                  </div>
                </div>
                <div>
                  <h3>Création de votre compte en cours</h3>
                </div>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column' }} >
                    <h3>Votre compte à été créé avec succès</h3>
                    <Icon type="check-circle" style={{ color: 'lightgreen', fontSize: '40px' }} />
                  </div>
                </div>
              </Carousel>
            </Form>
          </div>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(SignUpForm);


export default WrappedNormalLoginForm;

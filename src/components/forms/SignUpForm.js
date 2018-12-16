import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { SIGN_IN, HOME } from '../../router/routes'
import { Form, Icon, Input, Button, Carousel, message, Steps} from 'antd';
import { SessionStore } from '../../stores';

const FormItem = Form.Item;
const Step = Steps.Step;

class SignUpForm extends Component {

  static contextType = SessionStore
  constructor() {
    super()
    this.state = {
      firstSlideFields: [
        {
          var: 'lastName',
          label: 'Votre nom',
          options: {
            rules: [
              { required: true, message: 'votre nom est requis' }
            ]
          },
          component: <Input 
                      prefix={ <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> } 
                      />
        },
        {
          var: 'firstName',
          label: 'Votre prénom',
          options: {
            rules: [
              { required: true, message: 'votre prénom est requis' }
            ]
          },
          component: <Input 
                      prefix={ <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> }
                      />
        },
        {
          var: 'nickName',
          label: 'Votre surnom',
          options: { },
          component: <Input 
                      prefix={ <Icon type="tag" style={{ color: 'rgba(0,0,0,.25)' }} /> }
                      />
        }
      ],
      secondSlideFields: [
        {
          var: 'email',
          label: 'Adresse mail',
          options: {
            rules: [
              { required: true, message: 'une adresse mail est requise' },
              { type: 'email' , message: "Votre adresse mail est invalide"}
            ]
          },
          component: <Input 
                      prefix={ <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} /> }
                      />
        },
        {
          var: 'password',
          label: 'Mot de passe',
          options: {
            rules: [
              { required: true, message: 'un mot de passe est requis' },
              { min: 8, message: "Votre mot de passe n'est pas assez long"}
            ]
          },
          component: <Input 
                      type='password'
                      prefix={ <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} /> }
                      />
        },
        {
          var: 'confPassword',
          label: 'Confirmez mot de passe',
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
                      />
        }
      ],
      disabledNextButton: true,
      fieldValidateStatus: '',
      stepIconLoading: false,
      carouselSlideIndex: 0
    }
  }

  /**
   * Appelé à chaque fois que le formulaire est soumis 
   */
  onSubmit = (event) => {
    // on arrête la propagation de l'évènement
    event.preventDefault()
    this.setState({ fieldValidateStatus: '' }) // ?
    
    this.props.form.validateFields((err) => {
      if (!err) {
        /* Lorsqu'il n'y a pas d'erreur de saisie,
          on informe l'utilisateur que sa demande
          de création de compte à bien été prise en compte

          Après la fin de l'animation de la slide, 
          un évènement appelera la fontion afin de créer
          le compte de la personne
        */
        this.nextSlide()
      }
      else {
        /* Si il y a une erreur, on ne change pas
          de slide mais on informe l'utilisateur du
          problème en lui envoyant un message
        */
       message.error("Des champs sont mal complétés")
      } 
    });
  }

  /**
   * Créer un compte
   */
  createAccount() {
    // on récupère notre authentification
    const auth = this.context
    const { lastName, 
            firstName,
            nickName,
            email,
            password } = this.props.form.getFieldsValue()
          
          // on crée le user
          auth.createAccount(lastName, firstName, nickName, email, password)
          .then( () => {
            //await auth.connect(email, password)
            this.nextSlide()
            this.setState({ fieldValidateStatus: 'sucess', stepIconLoading: false })
          })
          .catch(error => {
            this.prevSlide()
            this.setState({ fieldValidateStatus: 'error', stepIconLoading: false })
            switch(error.code) {
              case "auth/email-already-in-use":
                message.error("L'adresse mail est déjà utilisée par un autre compte")
              break;
              default:
                message.error("Impossible de créer votre compte. Réessayez plus tard")
            }
          })
  }

  /**
   * Affiche le slide du carousel ayant l'index renseigné en paramètre
   * @param {int} index index du carousel que l'on souhaite afficher
   */
  goToSlide(index) {
    if (index >= 0) {
      this.setState({ carouselSlideIndex: index, stepIconLoading: (index === 2) })
      this.formCarousel.goTo(index)
    }
  }

  /**
   * Afficher la slide suivante 
   */
  nextSlide() {
    this.goToSlide(this.state.carouselSlideIndex + 1)
  }

  /**
   * Afficher la slide précédente
   */
  prevSlide() {
    this.goToSlide(this.state.carouselSlideIndex - 1)
  }

  /**
   * Lorsque l'animation de la slide est terminé,
   * on execute la fonction createAccount() qu'à 
   * l'index affichant la slide de récupération des
   * données
   */
  doActionAfterSlidding = (currentSlideIndex) => {
    switch(currentSlideIndex) {
      case 2 :
        this.createAccount()
      break;
      default:

    }
  }

  componentWillReceiveProps(){
    /**
     * Permet de désactiver le premier bouton 'suivant' si
     * les champs lastname et firstname ne sont pas renseignés
     */
    const { lastName, firstName } = this.props.form.getFieldsValue()
    if (lastName !== undefined && firstName !== undefined) {
      this.setState({ disabledNextButton: !(lastName.length && firstName.length) }) 
    }
    else {
      this.setState({ disabledNextButton: true })
    }
  }

  /**
   * Afficher le formulaire
   */
  render() {
    const { getFieldDecorator } = this.props.form
    return (
        <div>
          <div >
            <Steps size='small' labelPlacement='vertical' current={ this.state.carouselSlideIndex } >
                <Step /* Vos infos *//>
                <Step /* Vos identifiants */ />
                <Step icon={ (this.state.stepIconLoading) ? <Icon type="loading" /> : null } status=''  /* Vérification*/ />
            </Steps>  
          </div>

          <div>
            <Form onSubmit={this.onSubmit} >
              <Carousel dots={false} ref={node => (this.formCarousel = node) } afterChange={ this.doActionAfterSlidding } >
                <div>
                  <h3>Vos informations: </h3>
                  { 
                    this.state.firstSlideFields.map((element, index) => (
                      <FormItem key={index} label={element.label} fieldValidateStatus={this.state.fieldValidateStatus} colon={false} > 
                        { 
                          getFieldDecorator(element.var, element.options) (element.component)
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
                      <FormItem key={index} label={element.label} fieldValidateStatus={this.state.fieldValidateStatus} colon={false} > 
                        { 
                          getFieldDecorator(element.var, element.options) (element.component)
                        }
                      </FormItem>
                    ))
                  }
                  <div style={{ display: 'flex', alignItems: 'center' }} >
                    <Button type='default' onClick={ ()=>{ this.prevSlide() } } >Précédent</Button>
                    <Button type='primary' htmlType="submit" style={{ marginLeft: '10px' }} >Créer le compte</Button>
                  </div>
                </div>

                <div>                  
                    <h2 style={{  marginTop: '30px', textAlign: 'center' }}>Création de votre compte en cours ...</h2>
                </div>

                <div>
                  <div style={{ display: 'flex', flexDirection: 'column' }} >
                    <h2 style={{ marginTop: '30px', textAlign: 'center' }} >Votre compte à été créé avec succès !</h2>
                    <div style={{ textAlign: 'left', marginTop: '30px', lineHeight: '1.8' }}>
                      <h3>Vous pouvez maintenant :</h3>
                      <ul>
                        <li>Créer des demandes et obtenir de l'aide</li>
                        <li>Dialoguer, coopérer et proposer de l'aide aux demandeurs</li>
                      </ul>
                      <NavLink to={HOME} >
                        <Button type="primary" style={{ marginTop: '20px' }} >Découvrir cela</Button>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div></div>
              </Carousel>
            </Form>
          </div>
      </div>
    );
  }
}

export default Form.create()(SignUpForm);

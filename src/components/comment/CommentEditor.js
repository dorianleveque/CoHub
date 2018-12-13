import React, { Component } from 'react'
import { Form, Button, Input, message } from 'antd'

const { TextArea } = Input

class CommentEditor extends Component {

  constructor() {
    super()
    this.state = {
      submitting: false,
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({ submitting: true })

    this.props.form.validateFields((err, values) => {
      if (!err) {
        // on envoie l'ensembles des informations au composant parent
        this.props.onSubmit(values.editor).then( () => {
          this.setState({ submitting: false })
          
          this.props.form.setFieldsValue({ editor: '' })
        })
        .catch((error) => {
          this.setState({ submitting: false })
          switch(error.code) {
            case "auth/user-not-found":
              message.error("Aucun compte ne correspond à cet identifiant. Le compte a dû être supprimé")
            break;
            default:
              message.error("L'URL est invalide. Ceci peut arriver si l'url est mal formé, a expiré, ou a déjà été utilisé.")
          }
        })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.onSubmit} >
        <Form.Item>
          { 
            getFieldDecorator('editor') (<TextArea rows={3} />)
          }
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" loading={this.state.submitting} type="primary" > Add Comment </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create()(CommentEditor);
import React, { Component } from 'react'
import { Form, Button, Input, message } from 'antd'

const { TextArea } = Input

class CommentEditor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editor: {
        var: 'editor',
        options: {
          rules: [
            { required: true, whitespace: true , message: "Votre message parait bien vide, pas sûr qu'il soit utile. Modifiez le"}
          ]
        },
        component: <TextArea rows={3} />
      },
      submitting: false,
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({ submitting: true })

    this.props.form.validateFields((err, values) => {
      if (!err) {
        // on envoie l'ensembles des informations au composant parent
        this.props.onSubmit(values.editor).then(() => {
          this.setState({ submitting: false })
          
          this.props.form.resetFields()
        })
        .catch((error) => {
          this.setState({ submitting: false })
          switch(error.code) {
            case "impossible-to-edit-message":
              message.error("Impossible d'éditer votre aide. Réessayez plus tard")
            break;
            case "impossible-to-add-message":
              message.error("Impossible de publier votre aide. Réessayez plus tard")
            break;
            default:
              message.error("Impossible de publier votre aide. Réessayez plus tard")
          }
        })
      }
      else {
        this.setState({ submitting: false })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    let editorOptions = {...this.state.editor.options, initialValue: (this.props.commentBeingEdited) ? this.props.commentBeingEdited.getContent() : ''}
    return (
      <Form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <Form.Item style={{ flexGrow: 1, marginRight: '20px' }}>
          { 
            getFieldDecorator(this.state.editor.var, editorOptions) (this.state.editor.component)
          }
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" shape="circle" icon='message' loading={this.state.submitting} type="primary" ></Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create()(CommentEditor);
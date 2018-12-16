import React, { Component } from 'react'
import { Form, Button, Input, message } from 'antd'

const { TextArea } = Input

class CommentEditor extends Component {

  constructor() {
    super()
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
          
          this.props.form.setFieldsValue({ editor: '' })
        })
        .catch((error) => {
          this.setState({ submitting: false })
          switch(error) {
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
    return (
      <Form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <Form.Item style={{ flexGrow: 1, marginRight: '20px' }}>
          { 
            getFieldDecorator(this.state.editor.var, this.state.editor.options) (this.state.editor.component)
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
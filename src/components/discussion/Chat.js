import React, { Component } from 'react'
import { Comment } from 'antd'
import CommentEditor from './CommentEditor'
import CommentList from './CommentList'
import { SessionStore } from '../../stores';
import Avatar from '../Avatar'

class Chat extends Component {

  static contextType = SessionStore

  constructor() {
    super()
    this.state = {
      comments: [],
      commentsRetrieved: false
    }
  }

  componentWillReceiveProps(props) {
    const conversation = props.conversation
    if (conversation) {
      let messages = conversation.getMessages()
      if (!this.state.commentsRetrieved) {
        conversation.onMessageAdded(() => {
          this.setState({ 
            comments: conversation.getMessages(),
            commentsRetrieved: true
          })
        })
        conversation.onMessageChanged(() => {
          this.setState({ 
            comments: conversation.getMessages()
          })
        })
        conversation.onMessageDeleted(() => {
          this.setState({ 
            comments: conversation.getMessages()
          })
        })
      }
    }
  }

  addComment(user, content, date) {
    const firstname = user.getName()
    const surname   = user.getSurname()
    var name = `${ firstname } ${ surname }`
    this.setState({ 
      comments: [
        {
          author: name,
          avatar: <Avatar name={name} />,
          content: <p> {content} </p>,
          datetime: '20/02/1997'
        },
        ...this.state.comments
      ]
    })
  }

  // valeurs renvoyées lors d'un submit de l'éditeur
  onSubmit = async (value) => {
    try {
      const currentUser = this.context.getCurrentUser()
      const conversation = this.props.conversation
      await conversation.addMessage(currentUser, value, new Date())
    }
    catch (error) {
      throw error
    }
  }

  render() {
    let name = null
    if (this.context.isConnected()) {
      const curentUser = this.context.getCurrentUser()
      const firstname = curentUser.getName()
      const surname   = curentUser.getSurname()
      name = `${ firstname } ${ surname }`
    }
    
    return (
      <div>
        <CommentList
          loading={!this.state.commentsRetrieved}
          comments={this.state.comments} 
        />
        {
          (this.props.allowPublication)
          ? <Comment
              avatar={ <Avatar name={name} /> }
              content={
                <CommentEditor
                  onSubmit={this.onSubmit}
                />
              }
            />
          : null
        }
      </div>
    )
  }
}

export default Chat
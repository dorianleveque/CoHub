import React, { Component } from 'react'
import { Comment } from 'antd'
import CommentEditor from './CommentEditor'
import CommentList from './CommentList'
import { SessionStore } from '../../stores';
import Avatar from '../Avatar'

class CommentSystem extends Component {

  static contextType = SessionStore

  constructor() {
    super()
    this.state = {
      comments: [
        {
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: <p>Hello World</p>,
        },
      ]
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
    console.log(value)
    const currentUser = this.context.getCurrentUser()
    this.addComment(currentUser, value, null)
  }

  render() {
    const auth = this.context
    const curentUser = auth.getCurrentUser()
    const firstname = curentUser.getName()
    const surname   = curentUser.getSurname()
    var name = `${ firstname } ${ surname }`
    return (
      <div>
        <CommentList comments={this.state.comments} />
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

export default CommentSystem
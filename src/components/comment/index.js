import React, { Component } from 'react'
import { Comment, Avatar } from 'antd'
import CommentEditor from './CommentEditor'
import CommentList from './CommentList'
import { SessionStore } from '../../stores';
import { registerDatabase } from '@firebase/database';

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
    this.setState({ 
      comments: [
        {
          author: `${ firstname } ${ surname }`,
          avatar: this._userAvatar(user),
          content: <p> {content} </p>
        },
        ...this.state.comments
      ]
    })
  }

  _userAvatar(user) {
    const id        = user.getId()
    const firstname = user.getName()
    const surname   = user.getSurname()
    const nickname  = user.getNickname()
    const curentUserId = this.context.getCurrentUser().getId()

    return <Avatar style={{ backgroundColor: (id === curentUserId) ? 'rgba(0,0,0,0.3)': 'rgba(0,0,0,0.8)', verticalAlign: 'middle' }} size="large">
            {
              (nickname.length) 
              ? `${ nickname.substring(0, 4) }`
              : `${ firstname.substring(0, 1) }${ surname.substring(0, 1) }`
            }
          </Avatar>
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
    return (
      <div>
        <CommentList comments={this.state.comments} />
        {
          (this.props.allowPublication)
          ? <Comment
              avatar={ this._userAvatar(curentUser) }
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
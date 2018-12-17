import React, { Component } from 'react'
import { List, Spin, Icon, Comment } from 'antd'
import Avatar from '../Avatar'

class CommentList extends Component {

  header() {
    const comments = this.props.comments
    return `${comments.length} ${(comments.length > 1) ? "Réponses" : "Réponse"} `
  }

  renderComments = (message) => {
    const user = message.getSender()
    const firstname = user.getName()
    const surname   = user.getSurname()
    let name = `${ firstname } ${ surname }`

    const d = message.getDate()
    let date = `Envoyé le ${d.getDate()}/${d.getMonth()}/${d.getFullYear()} à ${d.getHours()}h${d.getMinutes()}`
    return <Comment 
              avatar={<Avatar name={name} />}
              author={name}
              content={message.getContent()}
              datetime={date}
            />
  }

  render() {
    Spin.setDefaultIndicator(<Icon type="loading" style={{ fontSize: '40px' }} />)
    return (
      <List 
        header={ this.header() } 
        itemLayout="horizontal"
        loading={ this.props.loading }
        dataSource={ this.props.comments }
        renderItem={ this.renderComments }
      />
    )
  }
}

export default CommentList
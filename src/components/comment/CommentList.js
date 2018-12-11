import React, { Component } from 'react'
import { List, Spin, Icon, Comment } from 'antd'

class CommentList extends Component {

  constructor() {
    super()
  }

  header() {
    const comments = this.props.comments
    return `${comments.length} ${(comments.length > 1) ? "Réponses" : "Réponse"} `
  }

  renderComments = (props) => {
    return <Comment {...props} />
  }

  render() {
    Spin.setDefaultIndicator(<Icon type="loading" style={{ fontSize: '40px' }} />)
    return (
      <List 
        header={ this.header() } 
        itemLayout="horizontal"
        loading={ !(this.props.comments.length > 0) }
        dataSource={ this.props.comments }
        renderItem={ this.renderComments }
      />
    )
  }
}

export default CommentList
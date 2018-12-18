import React, { Component } from 'react'
import { List, Spin, Icon, Comment, Tooltip, Popconfirm } from 'antd'
import Avatar from '../Avatar'
import { SessionStore } from '../../stores';

class CommentList extends Component {

  static contextType = SessionStore

  header() {
    const comments = this.props.comments
    return `${comments.length} ${(comments.length > 1) ? "Réponses" : "Réponse"} `
  }

  checkRights(message) {
    let sender = message.getSender()
    let currentUser = this.context.getCurrentUser()
    if (currentUser){
      return sender.checkRights(currentUser)
    }
    else {
      return false
    }
  }


  renderComments = (message) => {
    const user = message.getSender()
    const firstname = user.getName()
    const surname   = user.getSurname()
    let name = `${ firstname } ${ surname }`

    const d = message.getDate()
    let date = `Envoyé le ${d.toLocaleDateString('fr', {hour:'2-digit', minute:'2-digit'})}`


    let actions = (this.checkRights(message))
    ? [
      <span style={{position:'absolute', right:40}}>
      <Tooltip title="Modifier" placement='bottom'>
          <Icon
            type="edit"
            style={{ fontSize: '15px'}}
            onClick={() => this.props.onClickBtnEditMessage(message)}
          />
        </Tooltip>
    </span>,
      <span style={{position:'absolute', right:0}}>
        <Popconfirm
          placement="topRight" 
          title={<div style={{width: '200px'}}>Êtes-vous sûr de vouloir supprimer ce commentaire ?</div>}
          onConfirm={() => this.props.onClickBtnDeleteMessage(message)}
          okText="Oui"
          cancelText="Non"
          icon={<Icon type="question-circle-o" style={{ color: 'red' }}/>}
          >
          <Tooltip title="Supprimer" placement='bottom'>
              <Icon
                type="delete"
                style={{ fontSize: '15px'}}
              />
            </Tooltip>
        </Popconfirm>
      </span>
    ]
    : []

    return <Comment 
              avatar={<Avatar name={name} />}
              author={name}
              content={message.getContent()}
              datetime={date}
              actions={actions}
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
import React, { Component } from 'react'
import { Avatar } from 'antd'

const style = {
    avatar: {
        color: '#f56a00',
        backgroundColor: '#fde3cf'
    }
}
/**
 * Affiche un avatar en fonction de son nom. 
 * La couleur de fond est généré en fonction du nom
 * 
 * Props:
 *  - name (String) : nom de l'avatar
 */
class MyAvatar extends Component {

    constructor() {
        super()
        this.state = {
            colours: [
                '#002766', '#096dd9', '#0050b3',
                '#13c2c2', '#006d75', '#002329',
                '#52c41a', '#237804', '#092b00',
                '#f5222d', '#a8071a', '#5c0011',
                '#fa8c16', '#ad4e00', '#612500',
                '#fff566', '#fadb14', '#ad8b00',
                '#722ed1', '#391085', '#120338',
                '#eb2f96', '#9e1068',  '#e8e8e8', 
                '#8c8c8c', '#000000'
            ],

        }
    }

    generateInitialLetters(name) {
        var n = name || '?'
        var nameSplit = String(n).toUpperCase().split(' ')
        
        var initials
        if (nameSplit.length == 1) {
            initials = nameSplit[0] ? nameSplit[0].charAt(0):'?';
        } else {
            initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
        }
        return initials
    }

    generateNewAvatarStyle(initials) {
        var charIndex     = (initials == '?' ? 72 : initials.charCodeAt(0)) - 64;
        var colourIndex   = charIndex % this.state.colours.length;
        
        return { 
            backgroundColor: this.state.colours[colourIndex - 1],
            color: 'white',
            fontWeight: 'bold'
        }
    }

    render() {
        var initials = this.generateInitialLetters(this.props.name)
        var avatarColor = this.generateNewAvatarStyle(initials)
        return <Avatar style={ {...style.avatar, ...avatarColor} }>{initials}</Avatar>
    }
}

export default MyAvatar
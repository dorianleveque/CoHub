import React, { Component } from 'react';
import { Layout } from 'antd';

const {Footer} = Layout;

const style = {
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        background: '#595959'
    },
    div: {
        textAlign: 'left',
        color : '#FFF'
    },
    link: {
        color :'#FFF',
        textAlign: 'right'
    }
}

class Bottom extends Component { 
    render(){
       return ( 
        <div>
            <Footer style={style.footer}>
                <div  style={style.div}>
                    Chevallier Anouk
                    Delabre Jarod
                    Even Elouan
                    Lévêque Dorian 
                </div>
                <a href =  "https://git.enib.fr/d5levequ/CoHub"  style={style.link}> Pour plus d'information  sur le projet cliquez ici </a>
            </Footer>
        </div>
       );
    }
}export default Bottom;



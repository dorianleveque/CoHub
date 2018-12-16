import React, { Component } from 'react';
import { Layout, Col, Row, Icon } from 'antd';
import cohub from '../images/CoHub.png'
const {Footer} = Layout;

const style = {
    header: {
        textAlign: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold'
    },
    text: {
        textAlign: 'left',
        color : 'lightgrey',
        maxWidth: '350px'
    },
    citation: {
        color: 'white'
    },
    footer: {
        background: 'rgb(60, 60, 60)'
    },
    imgCohub: {
        width: '50px',
        height: 'auto',
        filter: 'opacity(100%) drop-shadow(rgb(0, 0, 0) 0px 0px 0px) invert(100%)'
    },
    teamList: {
        listStyle: 'none',
        paddingLeft: '0px',
        fontSize: '12px'
    },
    moreInfo: {
        display: 'inline-grid',
        verticalAlign: 'middle'
    }
}

class Bottom extends Component { 
    render(){
       return ( 
            <Footer style={style.footer}>
                <Row type='flex' justify='center' >
                    <Col style={style.header}>
                        <img alt="cohub" src={ cohub } style={ style.imgCohub } />
                        <h3 style={style.citation}>
                            <i>“ Une solution de partage et d'entraide à l'ENIB ”</i>
                        </h3>
                    </Col>
                </Row>
                <Row type='flex' justify='space-around' gutter={30} >
                    <Col style={{ marginTop: '30px' }} >
                        <div>
                            <h4 style={style.title} >DESCRIPTION</h4>
                            <p style={style.text} >
                                Projet réalisé dans le cadre de notre cursus 
                                à l'école national d'ingénieurs de Brest (ENIB),
                                en semestre S6A 2018
                            </p>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '30px' }} >
                        <div>
                            <h4 style={style.title} >REALISÉ PAR</h4>
                            <ul style={{...style.teamList, ...style.text}}>
                                <li>CHEVALLIER Anouk</li>
                                <li>DELABRE Jarod</li>
                                <li>EVEN Elouan</li>
                                <li>LÉVÊQUE Dorian</li>
                            </ul>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '30px' }} >
                        <div>
                            <h4 style={style.title} >+ D'INFORMATION</h4>
                            <a href="https://git.enib.fr/d5levequ/CoHub.git">
                                <div style={{...style.text, ...style.moreInfo}} >
                                    <Icon type='gitlab' style={{ color: '#fa7035', fontSize: '35px' }} />
                                    <span>GitLab du projet</span>
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Footer>
       );
    }
}export default Bottom;



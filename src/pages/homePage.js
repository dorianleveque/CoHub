import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {SIGN_IN, EDIT_DEMAND, DISPLAY_DEMAND, applyRouteParams} from '../router/routes'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <NavLink to={SIGN_IN} >Se Connecter </NavLink><br/>
                <NavLink to={applyRouteParams(DISPLAY_DEMAND, {id:20})} >demande n°20 </NavLink><br/>
                <NavLink to={applyRouteParams(EDIT_DEMAND, {id:20})} >editer demande n°20</NavLink><br/>
            </div>
        )
    }
}

export default HomePage
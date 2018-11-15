import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <NavLink to='/login' >Se Connecter </NavLink><br/>
                <NavLink to='/demande/20' >demande n°20 </NavLink><br/>
                <NavLink to='/demande/20/edit' >editer demande n°20</NavLink><br/>
            </div>
        )
    }
}

export default HomePage
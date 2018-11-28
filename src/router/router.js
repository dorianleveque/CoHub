import React, {Component} from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
//import PrivateRoute from './PrivateRoute'
import { HOME,
         SIGN_IN, 
         SIGN_UP, 
         LOGOUT, 
         CREATE_DEMAND, 
         DISPLAY_DEMAND, 
         EDIT_DEMAND,
         PublicRoute,
         PrivateRoute
        } from './routes'

/**
 * Importation des différentes pages de notre application
 */
import HomePage             from '../pages/HomePage'
import RequestCreatorPage   from '../pages/RequestCreatorPage'
import RequestPage          from '../pages/RequestPage'
import SignInPage           from '../pages/SignInPage'
import SignUpPage           from '../pages/SignUpPage'
import NotFoundPage         from '../pages/NotFoundPage'

/**
 * Définition de l'ensemble des différentes routes de notre application
 */

class Router extends Component {

    render() {
        const authUser = this.props.authUser
        return(
        <BrowserRouter>
            <Switch>
                <PublicRoute  component={HomePage           } authUser={authUser} exact path={HOME}           />
                <PublicRoute  component={RequestCreatorPage } authUser={authUser} exact path={CREATE_DEMAND}  />
                <PublicRoute  component={SignInPage         } authUser={authUser} exact path={SIGN_IN}        />
                <PublicRoute  component={SignUpPage         } authUser={authUser} exact path={SIGN_UP}        />
                <PublicRoute                                  authUser={authUser} exact path={LOGOUT}         />
                <PublicRoute  component={RequestPage        } authUser={authUser} exact path={DISPLAY_DEMAND} />
                <PrivateRoute component={RequestPage        } authUser={authUser}       path={EDIT_DEMAND}    redirectTo={SIGN_IN} />
                <PublicRoute  component={NotFoundPage       } authUser={authUser} />
 }           </Switch>
        </BrowserRouter>
        )
    }
}

export default Router;
import React, {Component} from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
//import PrivateRoute from './PrivateRoute'
import { HOME,
         SIGN_IN, 
         SIGN_UP, 
         CREATE_DEMAND, 
         DISPLAY_DEMAND, 
         EDIT_DEMAND,
         ACCOUNT,
         PublicRoute,
         PrivateRoute,
         ProtectedRoute
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
import ResetPasswordPage from '../pages/ResetPasswordPage';

/**
 * Définition de l'ensemble des différentes routes de notre application
 */

class Router extends Component {

    render() {
        return(
        <BrowserRouter>
            <Switch>
                <PublicRoute    component={HomePage           } exact path={HOME}           />
                <PrivateRoute   component={RequestCreatorPage } exact path={CREATE_DEMAND}  redirectTo={SIGN_IN} />
                <PublicRoute    component={SignInPage         } exact path={SIGN_IN}        />
                <PublicRoute    component={SignUpPage         } exact path={SIGN_UP}        />
                <PublicRoute    component={RequestPage        } exact path={DISPLAY_DEMAND} />
                <PrivateRoute   component={RequestPage        } exact path={EDIT_DEMAND}    redirectTo={SIGN_IN} />
                <ProtectedRoute component={ResetPasswordPage  }       path={ACCOUNT}        withSearchParams={{ mode: 'resetPassword' }} />

                <PublicRoute    component={NotFoundPage       } />
            </Switch>
        </BrowserRouter>
        )
    }
}

export default Router;
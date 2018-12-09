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
         PAGE_TEST_DODO,
         TEST_JAROD_ANOUK,
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

import TestPageDodo from '../pages/test/TestPageDodo';
import TestAnoukJarod from '../pages/test/TestAnoukJarod'
/**
 * Définition de l'ensemble des différentes routes de notre application
 */

class Router extends Component {

    render() {
        return(
        <BrowserRouter>
            <Switch>
                <PublicRoute    component={HomePage           } exact path={HOME}           />
                <PublicRoute    component={RequestCreatorPage } exact path={CREATE_DEMAND}  />
                <PublicRoute    component={SignInPage         } exact path={SIGN_IN}        />
                <PublicRoute    component={SignUpPage         } exact path={SIGN_UP}        />
                <PublicRoute    component={RequestPage        } exact path={DISPLAY_DEMAND} />
                <PrivateRoute   component={RequestPage        } exact path={EDIT_DEMAND}    redirectTo={SIGN_IN} />
                <ProtectedRoute component={ResetPasswordPage  }       path={ACCOUNT}        withSearchParams={{ mode: 'resetPassword' }} />
                
                <PublicRoute    component={TestPageDodo       } exact path={PAGE_TEST_DODO} />
                <PublicRoute    component={TestAnoukJarod     } exact path={TEST_JAROD_ANOUK} />
                <PublicRoute    component={NotFoundPage       } />
            </Switch>
        </BrowserRouter>
        )
    }
}

export default Router;
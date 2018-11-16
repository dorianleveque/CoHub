import React from 'react'
import { BrowserRouter, Switch, Route as PublicRoute } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import * as routes from './routes'

/**
 * Importation des différentes pages de notre application
 */
import HomePage             from '../pages/homePage'
import RequestCreatorPage   from '../pages/requestCreatorPage'
import RequestPage          from '../pages/requestPage'
import SignInPage           from '../pages/signInPage'
import SignUpPage           from '../pages/signUpPage'
import NotFoundPage         from '../pages/notFoundPage'

/**
 * Définition de l'ensemble des différentes routes de notre application
 */

const Router = (props) => (
    <BrowserRouter>
        <Switch>
            <PublicRoute  component={HomePage}           exact path={routes.HOME}           />
            <PublicRoute  component={RequestCreatorPage} exact path={routes.CREATE_DEMAND}  />
            <PublicRoute  component={SignInPage}         exact path={routes.SIGN_IN}        />
            <PublicRoute  component={SignUpPage}         exact path={routes.SIGN_UP}        />
            <PublicRoute                                 exact path={routes.LOGOUT}         />
            <PublicRoute  component={RequestPage}        exact path={routes.DISPLAY_DEMAND} />
            <PrivateRoute component={RequestPage}              path={routes.EDIT_DEMAND}    to={routes.SIGN_IN} isConnect={props.isConnect} />
            <PublicRoute  component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

export default Router;
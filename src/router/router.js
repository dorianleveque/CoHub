import React from 'react'
import { BrowserRouter, Switch, Route as PublicRoute } from 'react-router-dom'
import PrivateRoute from './privateRoute'

/**
 * Importation des différentes pages de notre application
 */
import HomePage from '../pages/homePage'
import RequestCreatorPage from '../pages/requestCreatorPage'
import RequestPage from '../pages/requestPage'
import LoginPage from '../pages/loginPage'
import NotFoundPage from '../pages/notFoundPage'

/**
 * Définition de l'ensemble des différentes routes de notre application
 */

const Router = (props) => (
    <BrowserRouter>
        <Switch>
            <PublicRoute exact path='/'                     component={HomePage}    />
            <PublicRoute exact path='/creer-une-demande'    component={RequestCreatorPage} />
            <PublicRoute exact path='/login'                component={LoginPage}   />
            <PublicRoute exact path='/logout' />
            <PublicRoute exact path='/demande/:id'  component={RequestPage}  />
            <PrivateRoute isConnect={props.isConnect} path='/demande/:id/edit' to='/login' component={RequestPage}  />
            <PublicRoute component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

export default Router;
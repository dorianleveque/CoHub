import React from 'react'
import { BrowserRouter, Switch, Route as PublicRoute } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

/**
 * Importation des différentes pages de notre application
 */
import HomePage from '../pages/HomePage'
import CreateDemandPage from '../pages/CreateDemandPage'
import DemandPage from '../pages/DemandPage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'

/**
 * Définition de l'ensemble des différentes routes de notre application
 */

const Router = (props) => (
    <BrowserRouter>
        <Switch>
            <PublicRoute exact path='/'                     component={HomePage}    />
            <PublicRoute exact path='/creer-une-demande'    component={CreateDemandPage} />
            <PublicRoute exact path='/login'                component={LoginPage}   />
            <PublicRoute exact path='/logout' />
            <PublicRoute exact path='/demande/:id'  component={DemandPage}  />
            <PrivateRoute isConnect={props.isConnect} path='/demande/:id/edit' to='/demande/:id' component={DemandPage}  />
            <PublicRoute component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

export default Router;
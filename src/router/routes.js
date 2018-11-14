import React from 'react'
import { Switch, Route } from 'react-router-dom'

/**
 * Importation des différentes pages de notre application
 */
import HomePage from '../pages/HomePage'
import CreateDemandPage from '../pages/CreateDemandPage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'

const RouteList = () => (
    <Switch>
        <Route exact path='/'               component={HomePage} />
        <Route exact path='/create-demande' component={CreateDemandPage} />
        <Route exact path='/login'          component={LoginPage} />
        <Route       path='/demande/:id'     />
        <Route component={NotFoundPage} />
    </Switch>
);

export default RouteList;
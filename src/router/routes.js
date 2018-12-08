import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import { SessionStore } from '../stores'
import NotFoundPage from '../pages/NotFoundPage';

/**
 * Ce fichier contient l'ensemble des routes de notre application
 * Il est utilisé :
 *  - par le fichier router.js afin d'attribuer une route à une page.
 *  - pour l'ensemble des liens de notre application. 
 */


/**
 * Liste des différentes routes de notre application
 */
export const HOME = '/'
export const ACCOUNT = '/compte'
export const SIGN_IN = '/compte/connection'
export const SIGN_UP = '/compte/inscription'
export const CREATE_DEMAND = '/creer-une-demande'
export const DISPLAY_DEMAND = '/demande/:id'
export const EDIT_DEMAND = '/demande/:id/edit'
export const PAGE_TEST_DODO = '/test/dodo'

export const TEST_JAROD_ANOUK = '/test/on-est-trop-fort'

/**
 * Applique les paramètres sur une 
 * route dynamique. Renvoie la route 
 * avec les paramètres rentrés
 * 
 * @param {String} route route
 * @param {Object} params {paramName: value, ...}
 * @returns {String} route avec paramètre
 */
export const applyRouteParams = function(route, params){
    let r = route
    Object.entries(params).forEach(([key, value]) => {
        r = r.replace(`:${key}`, value)
    })
    return r
}



/**
 * Affiche le composant passé dans sa props 'component'
 * lorsque la route demandée correspond à la sienne par
 * la props 'path'
 */
export class PublicRoute extends Component {
    
    createElementWithProps(component, ...rest) {
        const finalProps = Object.assign({}, ...rest)
        return React.createElement(component, finalProps)
    }
    
    render() {
        let { component, computedMatch, path, ...otherProps } = this.props
        return (
            <Route 
                path={path}
                render={ (routeProps) => this.createElementWithProps(component, routeProps, otherProps) }
            />
        )
    }
}

/**
 * Affiche le composant passé dans sa props 'component'
 * lorsque la route demandée correspond à la sienne par
 * la props 'path' et que l'ensemble des paramètres de recherche 
 * passées dans la props 'withSearchParams' sont identique avec
 * les paramètres de recherche de l'url.
 * 
 * Si les paramètres de recherche ne sont pas identique, alors 
 * l'utilisateur est redirigé si une redirection est rensignée
 * par la props 'redirectTo'. Sinon c'est la page 404 qui sera 
 * affichée.
 */
export class ProtectedRoute extends Component {
    render() {
        const { component, withSearchParams, redirectTo, path, computedMatch, ...otherProps } = this.props
        const params = new URLSearchParams(this.props.location.search)
        
        for (let key in withSearchParams) {
            if (withSearchParams[key] !== params.get(key)) {
                if (redirectTo) {
                    return <Redirect
                            from={path}
                            to={applyRouteParams(redirectTo, computedMatch.params)} />
                }
                else {
                    return <PublicRoute 
                            component={NotFoundPage}
                            path={path}
                            {...otherProps} /> 
                }
            }
        }
        return <PublicRoute 
                component={component}
                path={path}
                {...otherProps} /> 
    }
}

/**
 * Affiche le composant passé dans sa props 'component'
 * lorsque la route demandée correspond à la sienne par
 * la props 'path' et que celui-ci est bien authentifié.
 * 
 * Sinon l'utilisateur est redirigé à la route indiquée
 * dans la props 'redirectTo'
 */
export class PrivateRoute extends Component {
    static contextType = SessionStore
    render() {
        let { component, path, computedMatch, redirectTo, ...otherProps } = this.props
        const auth = this.context
        return auth.isValide() ? <PublicRoute 
                                    component={component}
                                    path={path}
                                    {...otherProps} /> 
                                : <Redirect 
                                    from={path}
                                    to={applyRouteParams(redirectTo, computedMatch.params)} />
    }
}
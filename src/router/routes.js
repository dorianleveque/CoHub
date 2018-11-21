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
export const SIGN_IN = '/connection'
export const SIGN_UP = '/inscription'
export const LOGOUT = '/logout'
export const CREATE_DEMAND = '/creer-une-demande'
export const DISPLAY_DEMAND = '/demande/:id'
export const EDIT_DEMAND = '/demande/:id/edit'



/**
 * Permet d'appliquer des paramètres sur une 
 * route dynamique. Renvoie la route avec les
 * paramètres rentrés
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
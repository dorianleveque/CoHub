import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { applyRouteParams } from './routes'

class PrivateRoute extends Component {
    render() {
        if(this.props.isConnect){ 
            return <Route path={this.props.path} component={this.props.component} />
        }
        else{
            return <Redirect from={this.props.path} to={applyRouteParams(this.props.to, this.props.computedMatch.params)} />
        }
    }
}

PrivateRoute.propType = {
    isConnect   : PropTypes.bool,
    path        : PropTypes.string,
    component   : PropTypes.object,
    to          : PropTypes.string
}

PrivateRoute.defaultProps = {
    to          : '/',
    isConnect   : false
}

export default PrivateRoute;
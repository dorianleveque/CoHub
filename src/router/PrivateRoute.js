import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component {
    render() {
        if(this.props.isConnect){ 
            return <Route path={this.props.path} component={this.props.component} />
        }
        else{
            let to = this.props.to
            Object.entries(this.props.computedMatch.params).forEach(([key, value]) => {
                to = to.replace(`:${key}`, value)
            })
            return <Redirect from={this.props.path} to={to} />
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
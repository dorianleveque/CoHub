import React, {Component} from 'react'

class RequestPage extends Component {
    
    render() {
        return (
            <div>
                <h2>Demande n°{this.props.match.params.id}</h2>
            </div>
        )
    }
}

export default RequestPage;
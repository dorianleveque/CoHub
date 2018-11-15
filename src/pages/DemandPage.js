import React, {Component} from 'react'

class DemandPage extends Component {
    
    render() {
        return (
            <div>
                <h2>Demande n°{this.props.match.params.id}</h2>
                <button onClick={()=>(this.props.history.replace('/'))}>home</button>
            </div>
        )
    }
}

export default DemandPage;
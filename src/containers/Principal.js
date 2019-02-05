import React, {Component} from 'react'

class Principal extends Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Principal;
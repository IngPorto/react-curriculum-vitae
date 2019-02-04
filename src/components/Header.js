import React, {Component} from 'react';

class Header extends Component{
    render(){
        return <div>
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.profession}</h2>
            </div>
            <div>
                <p>Location</p>
                <p>{`${this.props.location.city}, ${this.props.location.country}`}</p>
            </div>
        </div>
    }
}

export default Header;
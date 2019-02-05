import React, {Component} from 'react';
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Location from '../components/Location'

class Header extends Component{
    render(){
        const location = `${this.props.location.city}, ${this.props.location.country}`;

        return (
            <div className="Header">
                <Title text= {this.props.name}/>
                <Subtitle text= {this.props.profession}/>
                <Location location= {location}/>
            </div>
        )
    }
}

export default Header;
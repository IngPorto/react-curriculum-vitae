import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {data} from './data';
import Header from './components/Header';

class Main extends Component{
    render(){
        return (
            <Header
                name= {data.header.name}
                profession= {data.header.profession}
                location= {data.header.location}
            />
        )
    }
}

ReactDOM.render(
    <Main/>, 
    document.getElementById('main')
);

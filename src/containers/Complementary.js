import React, { Component } from "react";

class Complementary extends Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Complementary;
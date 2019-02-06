import React, { Component } from "react";

class Complementary extends Component{
    render(){
        return(
            <div className="mdc-layout-grid__cell--span-4">
                <div class="mdc-layout-grid__inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Complementary;
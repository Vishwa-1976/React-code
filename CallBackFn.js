import React, { Component } from "react";
import ChildComponent from "./Child";
class ParentComponent extends Component{
    handleClick=()=> {
        alert('Vishwa')
    }

    render() {
        return(
            <div>
                <ChildComponent handleClick={this.handleClick}/>
            </div>
        );
    }
}
export default ParentComponent;
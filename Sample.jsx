import React from "react";
class Sample extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Vish"
        }
    }
    changeName =()=>{
        this.setState (
            {
                name :"Vishwa"
            }
        )
    }
    render() {
        return (
            <div>
                <h1>My name is : {this.state.name} </h1>
                <button onClick={this.changeName}>Press Me</button>
            </div>
        )
    }
} 
export default Sample
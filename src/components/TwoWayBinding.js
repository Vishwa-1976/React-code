import React from "react";
class TwoWay extends React.Component {
    constructor() {
        super()
        this.state = {inputValue:''}
    }
    handleInput=(event)=> {
        this.setState(
            {
                inputValue:event.target.value
            }
        )
    }
    render() {
        return(
            <div>
                <input type='text' value={this.state.inputValue} onChange={this.handleInput}/>
                <p>{this.state.inputValue}</p>
            </div>
        )
    }
}
export default TwoWay;
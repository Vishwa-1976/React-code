import React, { Component } from 'react';
class ToggleMessage extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            isVisible : false
        }
    }
    toggleMessage=()=>{
        this.setState(prevState=>(
            {
               isVisible : !prevState.isVisible
            }
        )
        )
    }
    render()
    {
        return(
            <div>
                {this.state.isVisible && <p>Hi How are you?</p>}
                <button onClick={this.toggleMessage}>
                    {this.state.isVisible ? 'Hide': 'Show'}
                </button>
            </div>
        )
    }
}
export default ToggleMessage;
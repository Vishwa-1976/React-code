import React from "react";
import Radium from 'ladium';
function Color() {
    const styles={
        base : {
        color: 'pink', ':hover' : {color : 'darkpink'}
    }
}

    return(
        <div>
            <h1> style={styles.base}</h1>
        </div>
    )
}
export default Radium(Color)
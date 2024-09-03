import  React from "react";
function ChildComponent(props)
{
  return(
    
    <button onClick={props.handleClick}>Press Me</button>

  );

}
export default ChildComponent;
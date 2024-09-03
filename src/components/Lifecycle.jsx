import React, {useState, useEffect} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        console.log("Component mounted");
        
        return() => {
            console.log("Component is about to removed");
        }
    }, []);

    useEffect(() => {
        console.log("Comonent updated to ", count);

        if(count >= 10)
            setIsMounted(false)
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    }

    if(!isMounted)
        return <h2>Counter has been unmounted after 10 clicks!</h2>;

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default  Counter;
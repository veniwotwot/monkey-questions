import React from 'react';


export const Counter = () => {
    
    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <p>Total Count: {counter}</p>
            <button onClick={
                ()=>{
                    setCounter(counter + 1);
                    setCounter(counter + 1);
                    setCounter(counter + 1);
                }
            }>Click Me!</button>
        </div>
    )
}


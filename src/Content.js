import { useEffect, useState } from "react";

function Content() {
    const [count, setCount] = useState(60)
    let timerId

    function handleStart() {
        setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000)
        console.log(timerId);
    }
    function handleStop() {
        clearInterval(timerId)
        console.log(timerId);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div >
    )
}

export default Content;
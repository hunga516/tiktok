import { useEffect, useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(60)
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setCount(prev => prev - 1)
    }, 1000)
    return () => {
      clearTimeout(timeOutId)
    }
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev - 1)}>Start</button>
      <button onClick={() => setCount(count)}>Stop</button>
    </div >
  )
}

export default App;
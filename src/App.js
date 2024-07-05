import { useRef } from "react"
import MusicPlayer from "./components/MusicPlayer"
import Button from "./components/Button"

function App() {

  const musicRef = useRef()

  return (
    <>
      <MusicPlayer ref={musicRef}></MusicPlayer>
      <button onClick={() => musicRef.current.play()}>Play</button>
      <Button primary />
    </>
  )
}

export default App
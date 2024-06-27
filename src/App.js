import TodoApp from './Todo'
import Content from './Content'
import './App.css'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'

function App() {
  const context = useContext(ThemeContext)

  return (
    <>
      {/* <TodoApp Input={input} /> */}
      < button onClick={context.handleToggle} > Change theme</button >
      <Content />
    </>
  )
}

export default App;
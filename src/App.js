import { useRef, useState } from "react";
import { useStore, actions } from "./store";
import { deleteTodo, editTodo } from "./store/actions";

function App() {
  const [state, dispatch] = useStore()
  const [editIndex, setEditIndex] = useState(null)
  const inputRef = useRef()

  const { todoInput, todos } = state

  function handleDelete(index) {
    dispatch(deleteTodo(index))
    setEditIndex(null)
  }

  function handleEdit(index) {
    dispatch(editTodo(index))
    inputRef.current.focus()
    setEditIndex(index)
  }

  return (
    <>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="nhap vao cong viec"
        onChange={editIndex === null ? (e => dispatch(actions.setTodoinput(e.target.value))) : (e => dispatch(actions.setTodoinputRealTime(e.target.value, editIndex)))}
      />
      <button onClick={() => dispatch(actions.addTodo(todoInput))}>ADD</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <span onClick={() => handleDelete(index)}>X</span>
            <span onClick={() => handleEdit(index)}>EDIT</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;
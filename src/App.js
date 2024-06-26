import { useEffect, useReducer, useRef, useState } from "react";

const initial = {
  job: '',
  jobs: []
}

const SET_JOB = "set_job"
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}


const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return state = {
        ...state,
        job: action.payload
      }
    case ADD_JOB:
      return state = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    case DELETE_JOB:
      const newJobs = [...state.jobs]

      newJobs.splice(action.payload, 1)

      return state = {
        ...state,
        jobs: newJobs
      }
    default:
      throw new Error('Invalid aciton.')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initial)
  const { job, jobs } = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))

    inputRef.current.focus()
  }

  console.log(job);

  return (
    <div>
      <input
        ref={inputRef}
        value={job}
        placeholder="Nhap cong viec"
        onChange={e => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((item, index) => (
          <li key={index}>
            {item}
            <span onClick={() => dispatch(deleteJob(index))}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
import { useReducer } from "react";
import reducer, { initial } from './reducer'
import { setJob, addJob, deleteJob } from "./actions";
import logger from './logger'

function App() {
    const [state, dispatch] = useReducer(logger(reducer), initial)
    const { job, jobs } = state

    const handleSubmit = () => {
        dispatch(addJob(job))
    }

    const handleDelete = (index) => {
        dispatch(deleteJob(index))
    }

    return (
        <>
            <input
                value={job}
                onChange={e => dispatch(setJob(e.target.value))}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((item, index) => (
                    <li key={index}>
                        {item}
                        <span onClick={handleDelete}>X</span>
                    </li>

                ))}
            </ul>
        </>
    )
}

export default App;
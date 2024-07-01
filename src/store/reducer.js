import { ADD_TODO, DELETE_TODO, EDIT_TODO, SAVE_EDIT_TODO, SET_TODO_INPUT, SET_TODO_INPUT_REALTIME } from "./constants";

const initialState = {
    todos: [],
    todoInput: '',
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((job, index) => index !== action.payload)
            }
        case EDIT_TODO:
            return {
                ...state,
                todoInput: state.todos[action.payload]
            }
        case SET_TODO_INPUT_REALTIME:
            state.todos[action.index] = action.payload

            return {
                ...state,
                todoInput: action.payload
            }
        default:
            throw new Error('invalid action')
    }
}

export { initialState }
export default reducer
import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, EDIT_TODO, SAVE_EDIT_TODO, SET_TODO_INPUT_REALTIME } from './constants'

export const setTodoinput = payload => ({
    type: SET_TODO_INPUT,
    payload,
})

export const addTodo = payload => (
    {
        type: ADD_TODO,
        payload,
    }
)
export const deleteTodo = payload => (
    {
        type: DELETE_TODO,
        payload,
    }
)
export const editTodo = payload => (
    {
        type: EDIT_TODO,
        payload,
    }
)
export const saveEditTodo = payload => (
    {
        type: SAVE_EDIT_TODO,
        payload,
    }
)

export const setTodoinputRealTime = (payload, index) => (
    {
        type: SET_TODO_INPUT_REALTIME,
        payload,
        index
    }
)
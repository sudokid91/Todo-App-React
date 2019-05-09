import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, FETCH_TODOS, FETCH_SUCCESSED, FETCH_FAILED } from './actionTypes'

// let TodoId = 2

export const addTodo = (todo) => ({
    type: ADD_TODO,
    todo
})

export const deleteTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const fetchTodosAction = (sort) => {
    return {
        type: FETCH_TODOS,
        sort: sort
    }
}

export const fetchSuccessAction = (receivedTodos) => {
    return {
        type: FETCH_SUCCESSED,
        receivedTodos
    }
}

export const fetchFaildAction = (error) => {
    return {
        type: FETCH_FAILED,
        error: error
    }
}
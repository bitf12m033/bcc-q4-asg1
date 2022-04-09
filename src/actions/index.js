export const addTodo = ({ title, id,status }) => ({
    type: "ADD_TODO",
    payload: {
        title,
        id,
        status
    }
})

export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: {
        id
    }
})

export const deleteAll = () => ({
    type: "DELETE_ALL_TODO"
})


export const editTodo = ({ title, id }) => ({
    type: "EDIT_TODO",
    payload: {
        title,
        id
    }
})
export const toggleStatus = ({ status, id }) => ({
    type: "TOGGLE_STATUS",
    payload: {
        status,
        id
    }
})
export const filterTodo = ({ filterText }) => ({
    type: "FILTER_TODO",
    payload: {
        filterText
    }
})

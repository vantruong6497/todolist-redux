import * as types from './../constants/ActionTypes'
export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}
export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task
    }
}
export const toggleForm = ()=> {
    return {
        type: types.TOGGLE_FORM
    }
}

export const closeForm = ()=> {
    return {
        type: types.CLOSE_FORM
    }
}

export const openForm = ()=> {
    return {
        type: types.OPEN_FORM
    }
}

export const deleteItem = (id) => {
    return{
        type: types.DELETE_ITEM,
        id
    }
}

export const searchItem = (strSearch) => {
    return {
        type: types.SEARCH_ITEM,
        strSearch
    }
}

export const sortItem = (sort) => {
    return{
        type: types.SORT_ITEM,
        sort  //sort.name sort.level
    }
}

export const editItem = (itemSelected) => {
    return {
        type: types.EDIT_ITEM,
        itemSelected
    }
}
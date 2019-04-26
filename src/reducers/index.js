import { combineReducers } from 'redux';
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'
import search from './search'
import sort from './sort'
import itemSelected from './edit'

const myReducer = combineReducers ({
    tasks,  //tasks: tasks
    isDisplayForm,
    search,
    sort,
    itemSelected
})

export default myReducer;
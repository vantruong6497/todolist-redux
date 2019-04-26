import * as types from './../constants/ActionTypes'
import {remove, reject} from 'lodash'
const uuidv4 = require('uuid/v4');

var data = JSON.parse(localStorage.getItem('task'))
var initialReducer = data ? data : []

var myReducer = (state = initialReducer, action) => {
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            var task = {
                id: action.task.task_id,
                name: action.task.task_name,
                level: +action.task.task_level
            }
            if(action.task.task_id){
                state = reject(state, {id :action.task.task_id})
                task.id = action.task.task_id
            }else{
                task.id = uuidv4()
            }
            state.push(task);
            localStorage.setItem('task', JSON.stringify(state));
            return [...state];
        case types.DELETE_ITEM:
            var id = action.id;
            remove(state, (item)=>{
                return item.id === id;
            })
            localStorage.setItem('task', JSON.stringify(state))
            return [...state]
        default: return state
    }
}

export default myReducer
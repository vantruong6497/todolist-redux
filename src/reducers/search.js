import * as types from './../constants/ActionTypes'



var initialState = '';

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SEARCH_ITEM:
            return action.strSearch;
        default: return state
    }
}

export default myReducer
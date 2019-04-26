import * as types from './../constants/ActionTypes'



var initialState = {
    name: '',
    level: 0
};

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.EDIT_ITEM:
            return action.itemSelected;
        default: return state
    }
}

export default myReducer
import * as types from './../constants/ActionTypes'



var initialState = {
    by: "name",
    dir: "asc"
};

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SORT_ITEM:
            return {
                by: action.sort.orderBy,
                dir: action.sort.orderDir
            }
        default: return state;
    }
}

export default myReducer
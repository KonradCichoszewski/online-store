import { combineReducers } from 'redux'

let initialState = {
    products: []
};

function storeApp(state = initialState, action) {
    return state
    }

const rootReducer = combineReducers({storeApp})

export default rootReducer;
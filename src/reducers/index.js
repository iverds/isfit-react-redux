import { combineReducers } from 'redux';

function myButtonReducer(isOpen = false, action) {
    switch (action.type) {
        case "SWITCH_BUTTON":
            return action.isOpen;
        default:
            return isOpen;
    }
}

export default combineReducers({ 
    myButtonReducer
})
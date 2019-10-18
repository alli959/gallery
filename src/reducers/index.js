import {combineReducers} from 'redux';


const initialState = {
    data: [],
}

export function images(state = initialState, action) {
    switch(action.type) {
        case "GET_IMAGES": 
            return (
                action.payload
            );
        default:
            return (
                state
            )
    };
}
const reducer = combineReducers({
    images,
});

export default reducer;
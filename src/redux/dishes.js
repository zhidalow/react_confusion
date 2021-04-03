import * as ActionTypes from './ActionTypes';

//extend state for "dishes" to include 3 properties: "isLoading", "errMess", "dishes"
export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            //spread operator "...", create a copy of state, then mutate the params of this new obj before returning result
            // params after spread operator are applied as modifications to object which is a copy of state object
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};
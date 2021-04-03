import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

//defining external constant to pass required parameters to "dispatch()" method. Needs 2 main params: Actiontype and payload. Payload is usually js array 
//(type:"ADD_COMMENT",payload: { *js obj here* })
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//thunks are all implemented as functions; inner functions will receive dispatch payloads and handle actions 
export const fetchDishes = () => (dispatch) => {

    //thunk has 2 dispatches. dishesLoading will display the "Loading screen"
    dispatch(dishesLoading(true));

    //"addDishes" will occur after 2000ms 
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
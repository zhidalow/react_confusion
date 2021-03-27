import {DISHES} from '../shared/dishes'; //"../" means go up one level in folder directory. in this case will land on src, then find "shared" folder then "dishes" file
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
}

//state = initialState; defaults "state" to "initalState" when "state" is undefined (during first initialisation)
export const Reducer = (state = initialState,action) => {
    return state;
};
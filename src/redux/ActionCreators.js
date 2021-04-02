import * as ActionTypes from './ActionTypes';

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
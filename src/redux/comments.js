import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {

        //case is like boolean if test; if ActionType is of type ADD_COMMENT, will run below code, else will return default
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;

            //doing this as js array is numbered from 0,1,2 sequentially
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);

            //not mutating state; concat appends new state, so that can keep history of state changes
            //not persisting change, only storing in DOM? memory
            return state.concat(comment);

        default:
          return state;
      }
};
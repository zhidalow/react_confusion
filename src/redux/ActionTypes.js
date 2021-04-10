//can export all the action types which you need in this file, which can then be called in ActionCreators.js

export const ADD_COMMENT = 'ADD_COMMENT';
export const DISHES_LOADING = 'DISHES_LOADING';
export const DISHES_FAILED = 'DISHES_FAILED';
export const ADD_DISHES = 'ADD_DISHES';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const COMMENTS_FAILED = 'COMMENTS_FAILED';
//no "COMMENTS_LOADING"; comments loaded behind the scenes, "HomeComponent" will first be rendered, 
//but by that time comments will already be fetched in. By the time user navigates to DishDetailComponent; comments MUST have 
//already been loaded in since "HomeComponent" must render before user can even navigate to "DishDetailComponent" where comments are at

export const PROMOS_LOADING = 'PROMOS_LOADING';
export const ADD_PROMOS = 'ADD_PROMOS';
export const PROMOS_FAILED = 'PROMOS_FAILED';
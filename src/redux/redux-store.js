import {combineReducers, compose, createStore} from "redux";
import blogReducer from "./blog-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers( {
    blogPage: blogReducer,
    profilePage: profileReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducers );
window._store_ = store;

export default store
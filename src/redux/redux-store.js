import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import blogReducer from "./blog-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers( {
    blogPage: blogReducer,
    profilePage: profileReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducers, composeEnhancers(applyMiddleware( thunkMiddleware ) ));
window._store_ = store;

export default store
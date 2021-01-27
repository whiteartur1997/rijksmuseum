import { applyMiddleware, createStore } from "redux";
import { appReducer } from "./app-reducer";
import thunkMiddleware from 'redux-thunk';


export const store = createStore(appReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;
import { createStore } from "redux";
import { appReducer } from "./app-reducer";

export const store = createStore(appReducer);
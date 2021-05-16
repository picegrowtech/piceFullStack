import { configureStore } from "redux-inject-reducer-and-saga";

let store = configureStore();
global.store = store;

export { store };

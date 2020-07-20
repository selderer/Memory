import imagesReducer from "./imagesReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    cardFlip: imagesReducer,
});

const store = createStore(reducers);

export default store;

window.store = store;
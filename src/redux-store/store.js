const { default: cardFlipReducer } = require("./cardFlipReducer");
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    cardFlip: cardFlipReducer
});

const store = createStore(reducers);

export default store;

window.store = store;
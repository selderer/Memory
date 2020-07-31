import gameReducer from "./game-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    gameReducer,
});

const store = createStore(reducers);

export default store;

import React from 'react';
import store from "./redux-store/store";
import {Provider} from "react-redux";
import GameContainer from './components/Game/GameContainer';

function App() {
  return (
    <Provider store={store}>
      <GameContainer/>
    </Provider>
  );
}

export default App;

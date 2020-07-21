import React from 'react';
import Game from './components/Game/Game';
import store from "./redux-store/store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Game/>
    </Provider>
  );
}

export default App;


// Mi delaem igru 3*4, 12 6img *level 1* so state-om, redux
// card. v otdelnie div-y, i eto wsyo s Kontainer

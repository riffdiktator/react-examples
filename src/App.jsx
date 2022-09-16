import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {decreaseCounterAction, increaserCounterAction, resetCounterAction} from './store/counter/counter.actions'
import { selectCounterValue } from "./store/counter/counter.selector";
import LifeCycle from "./components/life-cycle.component";
import "./App.scss";

const App = () => {
  const disppatch = useDispatch();
  const counter = useSelector(selectCounterValue)
  const [componentIsShown, setComponentIsShown] = useState(false);

  const decreaseCounter = () => {
    disppatch(decreaseCounterAction())
  };

  const resetCounter = () => {
    disppatch(resetCounterAction())
  };

  const increaseCounter = () => {
    disppatch(increaserCounterAction())
  };

  const hideComponent = () => {
    setComponentIsShown(false);
  };

  const showComponent = () => {
    setComponentIsShown(true);
  };

  return (
    <div className="app-container">
      <h1>Counter: {counter}</h1>

      <div className="buttons-container">
        <button onClick={() => decreaseCounter()}>Decrease counter</button>
        <button onClick={() => resetCounter()}>Reset counter</button>
        <button onClick={() => increaseCounter()}>Increase counter</button>
      </div>

      {componentIsShown && (
        <div>
          <h2>LifeCycle component</h2>
          <LifeCycle />
        </div>
      )}
      <div className="buttons-container">
        <button onClick={() => hideComponent()}>
          Hide LifeCycle component
        </button>
        <button onClick={() => showComponent()}>
          Show LifeCycle component
        </button>
      </div>
    </div>
  );
};

export default App;

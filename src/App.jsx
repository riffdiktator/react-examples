import React, { useState, useContext } from "react";
import { CounterContext } from "./contexts/counter.context";
import LifeCycle from "./components/life-cycle.component";
import "./App.scss";

const App = () => {
  const {counter, setCounter} = useContext(CounterContext)
  const [componentIsShown, setComponentIsShown] = useState(false);

  const decreaseCounter = () => {
    setCounter(counter > 0 ? counter - 1 : 0);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
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

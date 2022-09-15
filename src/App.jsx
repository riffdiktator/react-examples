import React, { Component } from "react";
import LifeCycle from "./components/life-cycle.component";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, showComponent: false };
  }

  decreaseCounter() {
    const { counter } = this.state;
    this.setState({ counter: counter > 0 ? counter - 1 : 0 });
  }

  increaseCounter() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  resetCounter() {
    this.setState({ counter: 0 });
  }

  hideComponent() {
    this.setState({ showComponent: false });
  }

  showComponent() {
    this.setState({ showComponent: true });
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="app-container">
        <h1>Counter: {counter}</h1>

        <div className="buttons-container">
          <button onClick={() => this.decreaseCounter()}>
            Decrease counter
          </button>
          <button onClick={() => this.resetCounter()}>Reset counter</button>
          <button onClick={() => this.increaseCounter()}>
            Increase counter
          </button>
        </div>

        {this.state.showComponent && (
          <div>
            <h2>LifeCycle component</h2>
            <LifeCycle counter={this.state.counter} />
          </div>
        )}
        <div className="buttons-container">
          <button onClick={() => this.hideComponent()}>
            Hide LifeCycle component
          </button>
          <button onClick={() => this.showComponent()}>
            Show LifeCycle component
          </button>
        </div>
      </div>
    );
  }
}

export default App;

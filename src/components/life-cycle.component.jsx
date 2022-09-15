import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.counter };
  }
  static getDerivedStateFromProps(props) {
    return {
        value: props.counter
    }
  }


  shouldComponentUpdate(prevProps) {
    console.log('this should update: ',prevProps.counter !== this.props.counter)
    return prevProps.counter !== this.props.counter;
  }

  componentDidUpdate() {
    console.log('this is updating: ', this.props, this.state)
  }

  componentDidMount() {
    console.log('did mount value: ',this.props.counter)
  }
  
  componentWillUnmount() {
    console.log('component will unmount')
  }

  render() {
    return <div>Counter value: {this.state.value}</div>;
  }
}

export default LifeCycle;

import React from "react";

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isRunning: false,
    };
  }

  componentDidMount() {
    this.inteval = setInterval(() => {
      if (this.state.isRunning) {
        this.setState((prev) => ({ count: prev.count + 1 }));
      }
    }, 1000);
  }

  componentUnmount() {
    clearInterval(interval);
  }

  handleClick = () => {
    this.setState((prev) => ({
      isRunning: !prev.isRunning,
    }));
  };
  render() {
    const { count, isRunning } = this.state;
    return (
      <div>
        <h1>Count :{count}</h1>
        <button onClick={this.handleClick}>
          {isRunning ? "pause" : "play"}
        </button>
      </div>
    );
  }
}

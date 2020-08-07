import React from "react";
import fizzBuzz from "./fizz-buzz";

type Props = typeof defaultProps;
type State = typeof defaultProps;
const defaultProps = { counter: 0 };
export default class FizzBuzz extends React.Component<Props, State> {
  static defaultProps = defaultProps;
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: props.counter,
    };
  }

  increment = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>FizzBuzz Application</h1>
        <h2>{fizzBuzz(counter)}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

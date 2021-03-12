import React, { Component } from "react";
import Sub from "./Sub";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./ProfileWrapper";

class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1,
    });
  }

  render() {
    const { currentCount } = this.state;
    return (
      <div>
        {currentCount > 2 ? (
          // <Sub />
          <Redirect
            to={{
              pathname: "/counter/sub",
              // state: { from: location }
            }}
          />
        ) : (
          <>
            <h1>{this.props.lang !== 'spanish' ? "Counter" : "Contador"}</h1>

            <p>This is a simple example of a React component.</p>

            <p aria-live="polite">
              Current count: <strong>{this.state.currentCount}</strong>
            </p>

            <button className="btn btn-primary" onClick={this.incrementCounter}>
              Increment
            </button>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {return {lang: state.lang}}

export default connect(mapStateToProps)(Counter)

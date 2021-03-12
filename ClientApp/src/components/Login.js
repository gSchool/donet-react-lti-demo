import React from "react";
import Profile from "./Profile";
import { Route, Switch, Redirect } from "react-router";

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export default class Form extends React.Component {
  state = { user: null };

  handleSignIn = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    this.setState({ user: name });
  };

  handleSignOut = (cb) => {
    this.setState({ user: null });
    cb()
  };

  render() {
    console.log('render', this.state.user)
    let { history, location, match } = this.props;
    // let { from } = location.state || { from: { pathname: "/" } };
    console.log('history', history)
    console.log('location', location)
    return this.state.user ? (
      <>
        <Redirect
          to={{
            pathname: "/profile",
            state: { user: this.state.user },
          }}
        />
      </>
    ) : (
      <form onSubmit={this.handleSignIn}>
        <input type="text" placeholder="name" />
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

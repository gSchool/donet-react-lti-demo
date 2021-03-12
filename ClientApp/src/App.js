import React, { Component } from "react";
import { Route, Switch, Redirect, Browser } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import Counter from "./components/Counter";
import Sub from "./components/Sub"
import Login from "./components/Login"
import Private from './components/ProfileWrapper'

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  docs = "https://reactrouter.com/web/guides/quick-start"
  withRouter = "https://reactrouter.com/web/api/withRouter"
  stack = "https://stackoverflow.com/questions/48619733/react-router-redirect-vs-history-push"

  render() {
    return (
      <Layout>
        <Switch>
        <Route path="/counter/sub" component={Sub} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/login" component={Login} />
        <Private path="/profile"/>
        <Route path="/" component={Home}/>
        </Switch>
      </Layout>
    );
  }
}
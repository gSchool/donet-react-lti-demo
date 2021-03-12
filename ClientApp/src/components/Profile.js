import React from "react";
import { Route, Switch, Redirect } from "react-router";


class Profile extends React.Component {

    state = {loggedIn: true}

handleLogOut = () => {
this.setState({loggedIn: false})
}
  
  render() {
    let {user} = this.props
    return this.state.loggedIn ? (
      <>
        <button onClick={this.handleLogOut}>Sign Out</button>
        <h2>{`Welcome ${user} !!`}</h2>
      </>
    ) : (
        <Redirect
        to={{
          pathname: "/login",
        //   state: { user: null },
        }}/>
    )
  }
}

export default Profile

import React from "react";
import Profile from "./Profile"
import { Route, Switch, Redirect } from "react-router";

const PrivateRoute = () => {
    return(<Route
        render={({ location }) => {
           return location.state && location.state.user ? (
            <Profile user={location.state.user}/>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
            }
        }
      />

    )
}

export default PrivateRoute

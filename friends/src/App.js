import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

//

import NavBar from "./components/NavBar";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* The path goes with the <PrivateRoute> portion, the props go in the child component */}
      {/* <PrivateRoute exact path="/dashboard/friends/:id">
        <Friend />
      </PrivateRoute> */}
      {/* <PrivateRoute exact path="/dashboard/add_friend">
        <AddFriendForm />
      </PrivateRoute> */}
      {/* <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>{" "} */}
      {/* <Friends /> */}
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;

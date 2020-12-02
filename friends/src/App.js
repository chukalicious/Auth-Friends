import "./App.css";
import { Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <PrivateRoute path="/friends" component={Friends} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;

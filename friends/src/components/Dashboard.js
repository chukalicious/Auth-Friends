import React from "react";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <div>
      <h2>This the MyAccount/Dashboard component</h2>
      <button onClick={logout}>Logout</button>
      <br />
      {/* <AddFriendForm /> */}
    </div>
  );
};

export default Dashboard;

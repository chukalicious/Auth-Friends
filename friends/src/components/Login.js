import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  console.log("credentials", credentials);
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/login`, credentials)
      .then((res) => {
        console.log(res);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
      <p>Lambda School</p>
      <p>i minus 3 Lambd4</p>
    </div>
  );
};

export default Login;

import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../actions/authActions";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register({ username, email, password }));

    history.push("/login");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-success">Sign Up</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="text-primary">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="form-control border-info"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="text-primary">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control border-info"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="text-primary">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control border-info"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="button-container d-flex justify-content-between align-items-center mt-3">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <Link to="/" className="btn btn-secondary ">
            Back to Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;

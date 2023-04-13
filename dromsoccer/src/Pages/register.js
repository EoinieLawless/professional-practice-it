import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      username: this.state.username,
      password: this.state.password,
    };

    axios
      .post("http://localhost:4000/api/register", newUser)
      .then((response) => {
        console.log(response.data);
        this.setState({
          errorMessage: "",
          username: "",
          password: "",
        });
        alert("User registered successfully!");
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status === 409) {
          this.setState({ errorMessage: error.response.data.message });
        } else {
          this.setState({ errorMessage: "Unknown error occurred" });
        }
      });
  };

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <label>Create a username and password</label>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            className="form__control"
            onChange={this.onChangeUsername}
            value={this.state.username}
            required
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form__control"
            onChange={this.onChangePassword}
            value={this.state.password}
            required
          />
          <br />
          <br />
          <input type="submit" value="Add New User" />
          {this.state.errorMessage && (
            <p style={{ color: "red" }}>{this.state.errorMessage}</p>
          )}
        </form>
      </div>
    );
  }
}

export default Register;

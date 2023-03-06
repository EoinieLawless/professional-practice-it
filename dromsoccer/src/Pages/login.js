import React from "react";
import { Link } from "react-router-dom";

export class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
    
    const userInput = {
        username: this.state.username,
        password: this.state.password
    };    
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <form className="form">

                    <label htmlFor="username">Username:</label>
                    <input
                        className="form__input"
                        onChange={this.onChange}
                        value={this.state.username}
                        type="text"
                        id="username"
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        className="form__input"
                        type="password"
                        id="password"
                        onChange={this.onChange}
                        value={this.state.password}
                        required
                    />
                </form>
            </div>
        );
    }
}

export default Login;
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export class Register extends React.Component {
    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
           
        };
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.username},
        ${this.state.password}
        `);

        
        const newUser = {
            username: this.state.username,
            password: this.state.password
        }; 

        axios.post('http://localhost:4000/api/register', newUser)
        .then()
        .catch();

        this.setState({
            username:'',
            password:'',
        })
    }

    onChangeUsername = e => {
        this.setState({
            username:e.target.value
        })
    }

    onChangePassword = e => {
        this.setState({
            password:e.target.value
        })
    }

    

    render() {
        
        return (
            <div>
                
<br></br>
<br></br>
                <text>Create a username and password</text>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        className="form__control"
                        onChange={this.onChangeUsername}
                        value={this.state.username}
                        required
                    />
<br></br>
<br></br>
                    <label htmlFor="password">Password:</label>
                    <input
                        className="form__control"
                        onChange={this.onChangePassword}
                        value={this.state.password}
                        required
                    />
                    <br></br>
                    <br></br>
                    <input type="submit" value="Add New User" />
                </form>
                
            </div>
        );
    }
}

export default Register;
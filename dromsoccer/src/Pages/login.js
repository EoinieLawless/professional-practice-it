import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Login extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }
   //axios makes a request to the url and sets response to games array
    componentDidMount() {
        axios.get('http://localhost:4000/api/register')
            .then((response) => {
                this.setState({ users: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //JSON file of games array
    state = {
        users: [],
        username: '',
        password: ''
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

    onSubmit = e => {
        e.preventDefault();
    
        const userInput = {
            username: this.state.username,
            password: this.state.password
        };
    
        for (let i = 0; i < this.state.users.length; i++) {
            let user = this.state.users[i];
            if (user.username === userInput.username && user.password === userInput.password) {
                // login successful
                console.log("Login successful!");
                return;
            }
        }
    
        // login failed
        console.log("Login failed!");
    }

    render() {
        
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <br></br>
                    <br></br>
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
                        type="password"
                        className="form__control"
                        onChange={this.onChangePassword}
                        value={this.state.password}
                        required
                    />
                    <br></br>
                    <br></br>
                    <input type="submit" value="Login" />
                </form>
                    <label>Don't have an account, register below</label>
                    <br></br>
                    <Link to="/register"><button>
                      Register
                    </button>
                    </Link>
                
            </div>
        );
    }
}

export default Login;

import React from "react";

export class Login extends React.Component {
    render() {
        return (
            <div>
                <form className="form" onSubmit={handleSubmit}>

                    <label htmlFor="username">Username:</label>
                    <input
                        className="form__input"
                        type="text"
                        id="username"
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        className="form__input"
                        type="password"
                        id="password"
                        onChange={handlePwdInput}
                        value={password}
                        required
                    />
                </form>
            </div>
        );
    }
}
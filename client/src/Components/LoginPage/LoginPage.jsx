import React from "react";
import { connect } from "react-redux";
import * as userActions from "../../Store/User/actions";

import s from "./style.module.css";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            submitted: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        // this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.getToken(username, password);
        }
    }

    getToken(username, password) {
        fetch("http://127.0.0.1:5000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: username, password: password }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                console.log(data);
                this.props.setToken(data.auth_token);
                return data.auth_token;
            })
            .then((token) => {
                console.log(JSON.stringify(token));
                fetch("http://127.0.0.1:5000/api/users/status", {
                    method: "GET",
                    headers: {
                        Authorization: token,
                    },
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        }
                    })
                    .then((data) => {
                        console.log("user: ", data);
                        this.props.setUser(data);
                    });
            });
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className={`container ${s.max_height}`}>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>email</legend>

                            <input
                                type="text"
                                required
                                placeholder="Enter todo title"
                                onChange={this.handleChange}
                                value={username}
                                name="username"
                            ></input>
                        </fieldset>

                        <fieldset>
                            <legend>psw</legend>

                            <input
                                type="text"
                                required
                                placeholder="Enter todo title"
                                onChange={this.handleChange}
                                value={password}
                                name="password"
                            ></input>
                        </fieldset>

                        <div>
                            <button>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        token: state.user.token,
    };
};

const mapDispatch = {
    setToken: userActions.setToken,
    setUser: userActions.setUser,
};

const connector = connect(mapState, mapDispatch);

export default connector(LoginPage);

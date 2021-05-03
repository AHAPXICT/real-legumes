import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import { Link } from "react-router-dom";
import * as userActions from "../../Store/User/actions";

import s from "./style.module.css";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            redirect: false,
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
        const { username, password } = this.state;
        if (username && password) {
            this.getToken(username, password);
            this.setState({ redirect: true });
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
                sessionStorage.setItem("authToken", data.auth_token);
                this.props.setUser(data.user);
            });
    }

    render() {
        const { username, password, redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        }

        return (
            <div className={`container ${s.max_height} ${s.form_container}`}>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <fieldset className={s.fieldset}>
                            <legend>Email</legend>

                            <input
                                className={s.form_input}
                                type="text"
                                required
                                placeholder="Введіть emaіl"
                                onChange={this.handleChange}
                                value={username}
                                name="username"
                            ></input>
                        </fieldset>

                        <fieldset>
                            <legend>Пароль</legend>

                            <input
                                className={s.form_input}
                                type="password"
                                required
                                placeholder="Введіть пароль"
                                onChange={this.handleChange}
                                value={password}
                                name="password"
                            ></input>
                        </fieldset>

                        <div className={s.btn_container}>
                            <button className={s.btn_submit}>Увійти</button>
                        </div>

                        <span>
                            <Link to="/register">Заруєструватись!</Link>
                        </span>
                    </form>
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    return {};
};

const mapDispatch = {
    setUser: userActions.setUser,
};

const connector = connect(mapState, mapDispatch);

export default connector(LoginPage);

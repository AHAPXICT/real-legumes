import React from "react";
import NavItem from "./NavItem/NavItem";
import PropTypes from "prop-types";
import { REMOVE_USER } from "../../../Store/User/actions";
import { useDispatch } from "react-redux";

import s from "./style.module.css";

const Nav = ({ is_authenticated, is_admin }) => {
    const dispatch = useDispatch();
    const token = sessionStorage.getItem("authToken");
    const onExit = () => {
        fetch("http://127.0.0.1:5000/api/users/logout", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + token,
            },
            body: "",
        });
        dispatch({ type: REMOVE_USER });
        sessionStorage.clear();
    };

    return (
        <nav className={s.nav}>
            <NavItem path="/" text="Головна" />

            {is_admin && <NavItem path="/categories" text="Категорії" />}

            {is_admin && <NavItem path="/ingredients" text="Інгредієнти" />}

            <NavItem path="/menu" text="Меню" />

            <NavItem path="/about" text="Про нас" />

            <NavItem path="/cart" text="Корзина" />
            {is_authenticated ? (
                <button className={s.btn} onClick={onExit}>
                    Вихід
                </button>
            ) : (
                <NavItem path="/login" text="Вхід" />
            )}
        </nav>
    );
};

Nav.defaultProps = {
    is_authenticated: false,
};

Nav.propTypes = {
    is_authenticated: PropTypes.bool,
};

export default Nav;

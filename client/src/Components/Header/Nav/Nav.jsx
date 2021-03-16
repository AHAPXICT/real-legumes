import React from "react";
import NavItem from "./NavItem/NavItem";
import PropTypes from "prop-types";

import "./style.css";

const Nav = ({ is_authenticated }) => {
    return (
        <nav className="nav">
            <NavItem path="/" text="Головна" />

            <NavItem path="/menu" text="Меню" />

            <NavItem path="/about" text="Про нас" />

            <NavItem path="/cart" text="Корзина" />
            {is_authenticated ? (
                <NavItem path="/profile" text="Профіль" />
            ) : (
                <NavItem path="/enter" text="Вхід" />
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

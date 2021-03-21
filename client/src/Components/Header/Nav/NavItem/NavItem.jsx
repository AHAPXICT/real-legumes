import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

import "./style.css";

const NavItem = ({ path, text, className, ...props }) => {
    const classNames = classnames("nav__link", className);

    return (
        <NavLink
            exact
            to={path}
            className={classNames}
            activeClassName="nav__active"
            {...props}
        >
            {text}
        </NavLink>
    );
};

NavItem.defaultProps = {
    path: "/",
    text: "",
};

NavItem.propTypes = {
    text: PropTypes.string,
    path: PropTypes.string,
};

export default NavItem;

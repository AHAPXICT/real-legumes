import React from "react";
import Nav from "./Nav/Nav";
import { useSelector } from "react-redux";

import s from "./style.module.css";

const Header = () => {
    const user = useSelector((state) => state.user.user);

    let is_authenticated = false;
    let is_admin = false;

    if (user && Object.keys(user).length !== 0) {
        is_authenticated = true;
        is_admin = user.admin;
    }

    return (
        <header className={`${s.header} ${s.sticky}`}>
            <div className="container">
                <div className={s.header__inner}>
                    <div className={s.header__logo}>Справжні лєгуміни</div>
                    <Nav
                        is_authenticated={is_authenticated}
                        is_admin={is_admin}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;

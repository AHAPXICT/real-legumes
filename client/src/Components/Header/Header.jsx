import React from "react";
import Nav from "./Nav/Nav";

import s from "./style.module.css";

const Header = () => {
    return (
        <header className={`${s.header} ${s.sticky}`}>
            <div className="container">
                <div className={s.header__inner}>
                    <div className={s.header__logo}>Справжні лєгуміни</div>
                    <Nav is_authenticated={false} />
                </div>
            </div>
        </header>
    );
};

export default Header;

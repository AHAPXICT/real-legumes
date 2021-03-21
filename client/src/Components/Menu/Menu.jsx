import React from "react";
import DropdownItem from "./DropdownItem/DropdownItem";

import s from "./style.module.css";

const Menu = () => {
    return (
        <div className="container">
            <div
                className={`${s.full_height} ${s.menu_content} ${s.menu__background}`}
            >
                <h1 className={s.menu_title}>Наше меню</h1>
                <div className={s.menu__dropdown_section}>
                    <DropdownItem text="Категорії" />
                    <DropdownItem text="Ціни" />
                </div>
            </div>
        </div>
    );
};

export default Menu;

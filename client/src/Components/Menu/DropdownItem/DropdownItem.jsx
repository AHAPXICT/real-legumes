import React from "react";

import s from "./style.module.css";

const DropdownItem = ({ text }) => {
    return (
        <div className={s.dropdown}>
            <div class={s.dropdown__border}>
                <h3 class={s.dropdown__title}>{text}</h3>
            </div>
            <div class={s.dropdown_content}>
                <a href="#">Категорія 1</a>
                <a href="#">Дуже довга Категорія</a>
                <a href="#">Дуже довга Категорія Дуже довга Категорія</a>
            </div>
        </div>
    );
};

export default DropdownItem;

import React from "react";
import Button from "../../../Button/Button";

import s from "./style.module.css";

const CategoryItem = ({ name }) => {
    return (
        <div className={s.categoryItem}>
            <h1 className={s.categoryItem__name}>{name}</h1>
            <div>
                <Button text="edit" mode="warning" />
                <Button text="delete" mode="danger" />
            </div>
        </div>
    );
};

export default CategoryItem;

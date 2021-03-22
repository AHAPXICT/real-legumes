import React from "react";
import Button from "../../Button/Button";

import s from "./style.module.css";

const CategoryItem = ({ name }) => {
    return (
        <div className={s.categoryItem}>
            {name}
            <br />
            <Button text="edit" mode="warning" />
            <br />
            <Button text="delete" mode="danger" />
        </div>
    );
};

export default CategoryItem;

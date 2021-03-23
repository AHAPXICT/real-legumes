import React from "react";
import Button from "../../../Button/Button";

import s from "./style.module.css";

const CategoryItem = ({ name, updated_at, created_at }) => {
    return (
        <div className={s.categoryItem}>
            <h1 className={s.categoryItem__name}>{name}</h1>
            <p className={s.categoryItem__time_p}>Створено: {created_at}</p>
            <p className={s.categoryItem__time_p}>Оновлено: {updated_at}</p>
            <div>
                <Button text="Редагувати" mode="warning" />
                <Button text="Видалити" mode="danger" />
            </div>
        </div>
    );
};

export default CategoryItem;

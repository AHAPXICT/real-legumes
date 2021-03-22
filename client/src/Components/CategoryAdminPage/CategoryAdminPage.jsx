import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import Button from "../Button/Button";

import s from "./style.module.css";

const CategoryAdminPage = () => {
    return (
        <>
            <div className={`container ${s.max_height}`}>
                <div className={s.category__list}>
                    <div className={s.category__button_section}>
                        <Button text="Додати" mode="primary" />
                    </div>

                    <CategoryItem name="category 1" />
                    <CategoryItem name="category 2" />
                    <CategoryItem name="category 3" />
                </div>
            </div>
        </>
    );
};

export default CategoryAdminPage;

import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import Button from "../../Button/Button";

import s from "./style.module.css";

const CategoryAdminPage = ({ categories }) => {
    return (
        <>
            <div className={`container ${s.max_height}`}>
                <div className={s.category__list}>
                    <div className={s.category__button_section}>
                        <Button text="Додати" mode="primary" />
                    </div>

                    {categories.map((category) => (
                        <CategoryItem
                            key={category.name}
                            name={category.name}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryAdminPage;

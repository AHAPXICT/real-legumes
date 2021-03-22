import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";

import s from "./style.module.css";

const CategoryAdminPage = () => {
    return (
        <>
            <div className={`container ${s.max_height}`}>
                <div className={s.category_list}>
                    <CategoryItem name="category 1" />
                    <CategoryItem name="category 2" />
                    <CategoryItem name="category 3" />
                </div>
            </div>
        </>
    );
};

export default CategoryAdminPage;

import React from "react";

import s from "./style.module.css";

const CategoryItem = ({ name }) => {
    return (
        <div className={s.categoryItem}>
            {name}
            <br />
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
};

export default CategoryItem;

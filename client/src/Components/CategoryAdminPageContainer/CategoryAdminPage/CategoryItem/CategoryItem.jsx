import React from "react";
import Button from "../../../Button/Button";
import CategoryModalDialog from "../../../FormModalDialog/CategoryModalDialog";

import s from "./style.module.css";

const CategoryItem = ({
    name,
    updated_at,
    created_at,
    deleteCategory,
    updateCategory,
    updateInputValue,
    inputState,
}) => {
    const onDelete = () => {
        deleteCategory(name);
    };

    return (
        <div className={s.categoryItem}>
            <h1 className={s.categoryItem__name}>{name}</h1>
            <p className={s.categoryItem__time_p}>Створено: {created_at}</p>
            <p className={s.categoryItem__time_p}>Оновлено: {updated_at}</p>
            <div>
                <CategoryModalDialog
                    titleText={"Оновити категорію"}
                    helpText={"Введіть назвку категорії."}
                    fullWidth={100}
                    btnText={"Оновити"}
                    fieldText={"Категорія"}
                    mainBtnText={"Оновити"}
                    updateInputValue={updateInputValue}
                    inputState={inputState}
                    buttonOk={updateCategory}
                    initInputState={name}
                />
                <Button onClick={onDelete} text="Видалити" mode="danger" />
            </div>
        </div>
    );
};

export default CategoryItem;

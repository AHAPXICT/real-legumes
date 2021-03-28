import React from "react";
import Button from "../../../Button/Button";
import CategoryModalDialog from "../../../FormModalDialog/CategoryModalDialog";
import AlertModalDialog from "../../../AlertModalDialog/AlertModalDialog";

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
            <div className={s.categoryItem__btns}>
                <div className={s.categoryItem__btn_position}>
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
                </div>
                <div className={s.categoryItem__btn_position}>
                    <AlertModalDialog
                        mainButtonText="Видалити"
                        titleText="Видалити категорію?"
                        helpText="Ви дійсно хочете видалити категорію і всі продукти, які зв'язані з нею?"
                        cancelButtonText="Закрити"
                        submitButtonText="Видалити"
                        submitButtonAction={onDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;

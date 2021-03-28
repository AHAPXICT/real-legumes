import React from "react";
import CategoryModalDialog from "../../../../FormModalDialog/CategoryModalDialog";
import AlertModalDialog from "../../../../AlertModalDialog/AlertModalDialog";

import s from "./style.module.css";

const IngredientItem = ({ name, updated_at, created_at, deleteIngredient }) => {
    const onDelete = () => {
        deleteIngredient(name);
    };

    return (
        <div className={s.ingredientItem}>
            <h1 className={s.ingredientItem__name}>{name}</h1>
            <p className={s.ingredientItem__time_p}>Створено: {created_at}</p>
            <p className={s.ingredientItem__time_p}>Оновлено: {updated_at}</p>
            <div className={s.ingredientItem__btns}>
                {/* <div className={s.ingredientItem__btn_position}>
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
                </div> */}
                <div className={s.ingredientItem__btn_position}>
                    <AlertModalDialog
                        mainButtonText="Видалити"
                        titleText="Видалити інгредієнт?"
                        cancelButtonText="Закрити"
                        submitButtonText="Видалити"
                        submitButtonAction={onDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default IngredientItem;

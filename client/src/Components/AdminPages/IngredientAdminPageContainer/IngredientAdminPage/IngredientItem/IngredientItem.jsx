import React from "react";
import OneFieldModalDialog from "../../../../FormModalDialog/OneFieldModalDialog";
import AlertModalDialog from "../../../../AlertModalDialog/AlertModalDialog";

import s from "./style.module.css";

const IngredientItem = ({
    name,
    updated_at,
    created_at,
    deleteIngredient,
    updateIngredient,
    updateInputValue,
    inputState,
}) => {
    const onDelete = () => {
        deleteIngredient(name);
    };

    return (
        <div className={s.ingredientItem}>
            <h1 className={s.ingredientItem__name}>{name}</h1>
            <p className={s.ingredientItem__time_p}>Створено: {created_at}</p>
            <p className={s.ingredientItem__time_p}>Оновлено: {updated_at}</p>
            <div className={s.ingredientItem__btns}>
                <div className={s.ingredientItem__btn_position}>
                    <OneFieldModalDialog
                        titleText={"Оновити інгредієнт"}
                        helpText={"Введіть назву інгредієнтa."}
                        fullWidth={100}
                        btnText={"Оновити"}
                        fieldText={"Iнгредієнт"}
                        mainBtnText={"Оновити"}
                        updateInputValue={updateInputValue}
                        inputState={inputState}
                        buttonOk={updateIngredient}
                        initInputState={name}
                    />
                </div>
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

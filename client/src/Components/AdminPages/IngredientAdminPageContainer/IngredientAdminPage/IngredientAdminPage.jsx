import React from "react";
import IngredientItem from "./IngredientItem/IngredientItem";
import CategoryModalDialog from "../../../FormModalDialog/CategoryModalDialog";

import s from "./style.module.css";

const IngredientAdminPage = ({
    ingredients,
    updateInputValue,
    inputState,
    addIngredient,
}) => {
    return (
        <>
            <div className={`container ${s.max_height}`}>
                <div className={s.ingredient__list}>
                    <div className={s.ingredient__add_btn}>
                        <CategoryModalDialog
                            titleText={"Додати інгредієнт"}
                            helpText={"Введіть назвку інгредієнту."}
                            fullWidth={100}
                            btnText={"Додати"}
                            fieldText={"Інгредієнт"}
                            mainBtnText={"Додати"}
                            updateInputValue={updateInputValue}
                            inputState={inputState}
                            buttonOk={addIngredient}
                        />
                    </div>

                    {ingredients.map((ingredient) => (
                        <IngredientItem
                            key={ingredient.name}
                            name={ingredient.name}
                            updated_at={ingredient.updated_at}
                            created_at={ingredient.created_at}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default IngredientAdminPage;

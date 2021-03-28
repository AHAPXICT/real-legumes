import React from "react";
import IngredientItem from "./IngredientItem/IngredientItem";

import s from "./style.module.css";

const IngredientAdminPage = ({ ingredients }) => {
    return (
        <>
            <div className={`container ${s.max_height}`}>
                <div className={s.category__list}>
                    {/* <div className={s.category__add_btn}>
                        <CategoryModalDialog
                            titleText={"Додати категорію"}
                            helpText={"Введіть назвку категорії."}
                            fullWidth={100}
                            btnText={"Додати"}
                            fieldText={"Категорія"}
                            mainBtnText={"Додати"}
                            updateInputValue={updateInputValue}
                            inputState={inputState}
                            buttonOk={addCategory}
                        />
                    </div> */}

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

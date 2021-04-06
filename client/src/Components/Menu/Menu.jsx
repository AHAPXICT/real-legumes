import React from "react";
import DropdownItem from "./DropdownItem/DropdownItem";
import ProductItem from "./ProductItem/ProductItem";
import ProductModalDialog from "../FormModalDialog/ProductModalDialog";

import s from "./style.module.css";

const img_url =
    "https://images-gmi-pmc.edge-generalmills.com/df109202-f5dd-45a1-99b4-f10939afd509.jpg";

const Menu = ({
                  products,
                  inputNameState,
                  updateInputNameValue,
                  updateInputDescriptionValue,
                  inputDescriptionState,
                  inputPriceState,
                  updateInputPriceValue,
                  inputCaloriesState,
                  updateInputCaloriesValue,
                  inputCountState,
                  updateInputCountValue,
                  inputWeigthState,
                  updateInputWeigthValue,
                  isSpecialState,
                  updateIsSpecialValue,
                  categories,
                  inputCategoryState,
                  updateCategoryValue,
                  ingredients,
                  addIngredient,
                  deleteIngredient
              }) => {
    return (
        <div className="container">
            <div
                className={`${s.full_height} ${s.menu_content} ${s.menu__background}`}
            >
                <div className={s.menu__first_section}>
                    <h1 className={s.menu_title}>Наше меню</h1>
                    <ProductModalDialog
                        titleText="Додати новий продукт"
                        helpText="Щоб додати, заповніть всі поля."
                        fullWidth={100}
                        nameHelpText="Назва продукту"
                        descriptionHelpText="Опис продукту"
                        is_specialHelpText="Чи особливий"
                        priceHelpText="Ціна в грн"
                        weightHelpText="Вага в грамах"
                        countHelpText="Кількість на складі"
                        caliriesHelpText="Кількість калорій"
                        inputNameState={inputNameState}
                        updateInputNameValue={updateInputNameValue}
                        updateInputDescriptionValue={
                            updateInputDescriptionValue
                        }
                        inputDescriptionState={inputDescriptionState}
                        inputPriceState={inputPriceState}
                        updateInputPriceValue={updateInputPriceValue}
                        inputCaloriesState={inputCaloriesState}
                        updateInputCaloriesValue={updateInputCaloriesValue}
                        inputCountState={inputCountState}
                        updateInputCountValue={updateInputCountValue}
                        inputWeigthState={inputWeigthState}
                        updateInputWeigthValue={updateInputWeigthValue}
                        isSpecialState={isSpecialState}
                        updateIsSpecialValue={updateIsSpecialValue}
                        categories={categories}
                        inputCategoryState={inputCategoryState}
                        updateCategoryValue={updateCategoryValue}
                        ingredients={ingredients}
                        addIngredient={addIngredient}
                        deleteIngredient={deleteIngredient}
                    />
                    <div className={s.menu__dropdown_section}>
                        <DropdownItem text="Категорії"/>
                        <DropdownItem text="Ціни"/>
                    </div>
                </div>
                <div className={`${s.menu__items_row} ${s.menu__container}`}>
                    {products.map((product) => (
                        <ProductItem
                            name={product.name}
                            ingredients={product.ingredients}
                            weight={product.weight}
                            price={product.price}
                            img_url={product.images[0].image_data}
                            img_url={img_url}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;

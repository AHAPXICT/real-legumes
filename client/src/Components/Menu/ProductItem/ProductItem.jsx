import React from "react";
import PropTypes from "prop-types";

import s from "./style.module.css";

const ProductItem = ({ name, ingredients, weight, price, img_url }) => {
    return (
        <div class={s.menu__item}>
            <div class={s.menu__item_inner}>
                <img className={s.menu__item_img} src={img_url} alt="" />
                <h1 className={s.menu__item_name}>{name}</h1>
                <p className={s.menu__item_ingredients}>
                    {ingredients.join(", ")}.
                </p>
                <p className={s.menu__item_weight}>{weight} г</p>
                <div
                    className={`${s.menu__container} ${s.menu__item_last_section_content}`}
                >
                    <div className={s.menu__item_price}>{price} грн</div>
                    <button className={s.menu__item_buy_btn}>Купити</button>
                </div>
            </div>
        </div>
    );
};

ProductItem.defaultProps = {
    name: PropTypes.string,
    ingredients: PropTypes.array,
    weight: PropTypes.number,
    price: PropTypes.number,
    img_url: PropTypes.string,
};

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    weight: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    img_url: PropTypes.string.isRequired,
};

export default ProductItem;

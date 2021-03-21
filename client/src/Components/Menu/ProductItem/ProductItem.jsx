import React from "react";
import PropTypes from "prop-types";

import s from "./style.module.css";

const ProductItem = ({ name, ingredients, weight, price, img_url }) => {
    return (
        <div className={s.product}>
            <div className={s.product_inner}>
                <img className={s.product_img} src={img_url} alt="" />
                <h1 className={s.product_name}>{name}</h1>
                <p className={s.product_ingredients}>
                    {ingredients.join(", ")}.
                </p>
                <p className={s.product_weight}>{weight} г</p>
                <div
                    className={`${s.product__container} ${s.product_last_section_content}`}
                >
                    <div className={s.product_price}>{price} грн</div>
                    <button className={s.product_buy_btn}>Купити</button>
                </div>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    weight: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    img_url: PropTypes.string.isRequired,
};

export default ProductItem;

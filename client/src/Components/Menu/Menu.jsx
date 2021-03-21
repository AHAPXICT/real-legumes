import React from "react";
import DropdownItem from "./DropdownItem/DropdownItem";

import s from "./style.module.css";

const img_url =
    "https://images-gmi-pmc.edge-generalmills.com/df109202-f5dd-45a1-99b4-f10939afd509.jpg";

const Menu = () => {
    return (
        <div className="container">
            <div
                className={`${s.full_height} ${s.menu_content} ${s.menu__background}`}
            >
                <div className={s.menu__first_section}>
                    <h1 className={s.menu_title}>Наше меню</h1>
                    <div className={s.menu__dropdown_section}>
                        <DropdownItem text="Категорії" />
                        <DropdownItem text="Ціни" />
                    </div>
                </div>
                <div className={`${s.menu__items_row} ${s.menu__container}`}>
                    <div class={s.menu__item}>
                        <div class={s.menu__item_inner}>
                            <img
                                className={s.menu__item_img}
                                src={img_url}
                                alt=""
                            />
                            <h1 className={s.menu__item_name}>Лєгумін 1</h1>
                            <p className={s.menu__item_ingredients}>
                                ingredient 1, ingredient 2, ingredient 3,
                                ingredient 4, ingredient 5, ingredient 6.
                            </p>
                            <p className={s.menu__item_weight}>500 г</p>
                            <div
                                className={`${s.menu__container} ${s.menu__item_last_section_content}`}
                            >
                                <div className={s.menu__item_price}>
                                    120 грн
                                </div>
                                <button className={s.menu__item_buy_btn}>
                                    Купити
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class={s.menu__item}>
                        <div class={s.menu__item_inner}>
                            <img
                                className={s.menu__item_img}
                                src={img_url}
                                alt=""
                            />
                            <h1 className={s.menu__item_name}>Лєгумін 1</h1>
                            <p className={s.menu__item_ingredients}>
                                ingredient 1, ingredient 2, ingredient 3,
                                ingredient 4, ingredient 5, ingredient 6.
                            </p>
                            <p className={s.menu__item_weight}>500 г</p>
                            <div
                                className={`${s.menu__container} ${s.menu__item_last_section_content}`}
                            >
                                <div className={s.menu__item_price}>
                                    120 грн
                                </div>
                                <button className={s.menu__item_buy_btn}>
                                    Купити
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${s.menu__items_row} ${s.menu__container}`}>
                    <div class={s.menu__item}>
                        <div class={s.menu__item_inner}>
                            <img
                                className={s.menu__item_img}
                                src={img_url}
                                alt=""
                            />
                            <p className={s.menu__item_ingredients}>
                                ingredient 1, ingredient 2, ingredient 3,
                                ingredient 4, ingredient 5, ingredient 6.
                            </p>
                            <p className={s.menu__item_weight}>500 гр</p>
                            <div
                                className={`${s.menu__container} ${s.menu__item_last_section_content}`}
                            >
                                <div className={s.menu__item_price}>
                                    120 грн
                                </div>
                                <button className={s.menu__item_buy_btn}>
                                    Купити
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class={s.menu__item}>
                        <div class={s.menu__item_inner}>
                            <img
                                className={s.menu__item_img}
                                src={img_url}
                                alt=""
                            />
                            <p className={s.menu__item_ingredients}>
                                ingredient 1, ingredient 2, ingredient 3,
                                ingredient 4, ingredient 5, ingredient 6.
                            </p>
                            <p className={s.menu__item_weight}>500 гр</p>
                            <div
                                className={`${s.menu__container} ${s.menu__item_last_section_content}`}
                            >
                                <div className={s.menu__item_price}>
                                    120 грн
                                </div>
                                <button className={s.menu__item_buy_btn}>
                                    Купити
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class={s.menu__item}>
                        <div class={s.menu__item_inner}>
                            <img
                                className={s.menu__item_img}
                                src={img_url}
                                alt=""
                            />
                            <p className={s.menu__item_ingredients}>
                                ingredient 1, ingredient 2, ingredient 3,
                                ingredient 4, ingredient 5, ingredient 6.
                            </p>
                            <p className={s.menu__item_weight}>500 г</p>
                            <div
                                className={`${s.menu__container} ${s.menu__item_last_section_content}`}
                            >
                                <div className={s.menu__item_price}>
                                    120 грн
                                </div>
                                <button className={s.menu__item_buy_btn}>
                                    Купити
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;

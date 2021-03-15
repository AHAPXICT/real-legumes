import React from "react";

import "./style.css";

const SpecialMenu = () => {
    return (
        <section className="special_menu">
            <div className="container">
                <div className="special_menu__title_block">
                    <h2 className="special_menu__title">Особливі лєгуміни</h2>
                </div>
                <div className="slaider">
                    <div className="slider__item">
                        <div className="slider__content">
                            <h3 className="slider__content_title">Лєгумін 1</h3>

                            <h3 className="slider__content_title">
                                Ціна: 200 грн
                            </h3>

                            <h3 className="slider__content_title">
                                200 грамів
                            </h3>
                        </div>
                    </div>
                    <div className="slider__item">
                        <div className="slider__content">
                            <h3 className="slider__content_title">Лєгумін 2</h3>

                            <h3 className="slider__content_title">
                                Ціна: 500 грн
                            </h3>

                            <h3 className="slider__content_title">
                                100 грамів
                            </h3>
                        </div>
                    </div>
                    <div className="slider__item">
                        <div className="slider__content">
                            <h3 className="slider__content_title">Лєгумін 3</h3>

                            <h3 className="slider__content_title">
                                Ціна: 400 грн
                            </h3>

                            <h3 className="slider__content_title">
                                300 грамів
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialMenu;

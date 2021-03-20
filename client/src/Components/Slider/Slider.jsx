import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import s from "./style.module.css";

const SliderData = [
    {
        image:
            "https://images-gmi-pmc.edge-generalmills.com/df109202-f5dd-45a1-99b4-f10939afd509.jpg",
    },
    {
        image:
            "https://www.rachaelrayshow.com/sites/default/files/styles/video_1920x1080/public/images/2020-08/pancakes.jpg?itok=_b20Usqy",
    },
    {
        image:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190403-pancakes-066-copy-1554497284.jpeg?crop=0.777xw:0.584xh;0.115xw,0.315xh&resize=1200:*",
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }

    return (
        <section className={s.slider}>
            <FaArrowAltCircleLeft
                className={s.left_arrow}
                onClick={prevSlide}
            />
            <FaArrowAltCircleRight
                className={s.right_arrow}
                onClick={nextSlide}
            />
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={
                            index === current
                                ? `${s.slide} ${s.active} ${s.slider__container}`
                                : s.slide
                        }
                        key={index}
                    >
                        {index === current && (
                            <div>
                                <img
                                    src={slide.image}
                                    alt=""
                                    className={s.image}
                                />
                                <div className={s.slider__content}>
                                    <h3 className={s.slider__content_title}>
                                        Лєгумін 2
                                    </h3>

                                    <h3 className={s.slider__content_title}>
                                        Ціна: 500 грн
                                    </h3>

                                    <h3 className={s.slider__content_title}>
                                        100 грамів
                                    </h3>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default Slider;

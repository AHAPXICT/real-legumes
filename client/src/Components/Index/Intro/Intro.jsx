import React from "react";

import s from "./style.module.css";

const Intro = () => {
    return (
        <div className={s.intro}>
            <div className="container">
                <div className={s.intro__inner}>
                    <h1 className={s.intro__title}>
                        Запрошуєм скуштувати найкращу випічку
                    </h1>
                    <h2 className={s.intro__subtitle}>
                        Справжні, львівські лєгуміни,
                        <br />
                        які ви зможете замовити тільки в нас.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Intro;

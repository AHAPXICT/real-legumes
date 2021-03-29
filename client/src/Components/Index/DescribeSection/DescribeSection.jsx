import React from "react";

import s from "./style.module.css";

const DescribeSection = () => {
    return (
        <section className={s.section}>
            <div className="container">
                <div className={s.section__inner}>
                    <div className={s.section__block}>
                        <div className={s.section__text}>
                            <h2 className={s.section__title}>
                                Lorem ipsum dolor sit amet.
                            </h2>
                            <p className={s.section__text}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui enim quas perferendis
                                molestiae, reprehenderit sit soluta officiis
                                odio aspernatur consequuntur voluptatem
                                voluptates in, debitis velit architecto quos
                                illo, sapiente id.
                            </p>
                            <p className={s.section__text}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui enim quas perferendis
                                molestiae, reprehenderit sit soluta officiis
                                odio aspernatur consequuntur voluptatem
                                voluptates in, debitis velit architecto quos
                                illo, sapiente id.
                            </p>
                        </div>
                    </div>
                    <div className={s.section__block}>
                        <div className={s.section__image}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DescribeSection;

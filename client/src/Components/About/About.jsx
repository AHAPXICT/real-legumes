import React, { useEffect } from "react";

import AboutProfile from "./AboutProfile/AboutProfile";
import img_me from "../../static/images/team/me.jpg";
import img_mary from "../../static/images/team/mary.jpg";

import s from "./style.module.css";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <section className={s.team}>
            <div className="container">
                <h1 className={s.team__title}>Наша команда</h1>
                <h2 className={s.team__subtitle}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reiciendis fugiat voluptatem dolorum sint quia voluptatibus
                    natus minima, a nisi! Quos voluptate harum error fugiat
                    soluta praesentium cupiditate ex perspiciatis ea!
                </h2>
                <div className={s.team__section}>
                    <AboutProfile profile_image={img_me} />
                    <AboutProfile profile_image={img_mary} />
                </div>
            </div>
        </section>
    );
};

export default About;

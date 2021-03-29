import React from "react";

import s from "./style.module.css";

const Social = ({ images }) => {
    return (
        <div className={s.team__social_block}>
            {images.map((image) => (
                <img className={s.team__logo} src={image} alt="" />
            ))}
        </div>
    );
};

export default Social;

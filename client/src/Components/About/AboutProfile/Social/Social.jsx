import React from "react";

import "./style.css";

const Social = ({ images }) => {
    return (
        <div class="team__social_block">
            {images.map((image) => (
                <img class="team__logo" src={image} alt="" />
            ))}
        </div>
    );
};

export default Social;

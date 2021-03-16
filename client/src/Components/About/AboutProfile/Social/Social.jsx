import React from "react";

import "./style.css";

const Social = ({ images }) => {
    return (
        <div className="team__social_block">
            {images.map((image) => (
                <img className="team__logo" src={image} alt="" />
            ))}
        </div>
    );
};

export default Social;

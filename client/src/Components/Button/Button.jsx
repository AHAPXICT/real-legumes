import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import "./style.css";

const Button = ({ text, mode, ...props }) => {
    const [classNames, setClassNames] = useState("button");

    return (
        <button
            className={classNames}
            {...props}
            onMouseOver={() =>
                setClassNames(classNames + " " + `button__${mode}`)
            }
            onMouseLeave={() => setClassNames("button")}
        >
            {text}
        </button>
    );
};

Button.defaultProps = {
    mode: "primary",
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(["primary", "secondary", "danger", "warning"]),
};

export default Button;

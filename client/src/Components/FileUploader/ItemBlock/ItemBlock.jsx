import React from "react";
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

import s from './style.module.css'

const ItemBlock = ({name, btnText, btnAction}) => {
    return (
        <div className={`${s.container} ${s.item_position}`}>
            <div className={s.item__text_block}>
                {name}
            </div>
            <div className={s.item__btn_block}>
                <Button onClick={btnAction} variant="contained" color="secondary">
                    {btnText}
                </Button>
            </div>
        </div>
    )
}

ItemBlock.defaultProps = {
    btnText: "Видалити"
}

ItemBlock.propTypes = {
    name: PropTypes.string.isRequired,
    btnAction: PropTypes.func.isRequired,
    btnText: PropTypes.string,
}

export default ItemBlock
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './style.css'

const NavItem = ({text, active, className, ...props}) => {
    const classNames = classnames(
        'nav__link',
        {
            'nav__active': Boolean(active)
        },
        className
    )

    return (
        <a className={classNames} {...props} href="#">{text}</a>
    )
}

NavItem.defaultProps = {
    active: false
}

NavItem.propTypes = {
    text: PropTypes.string,
    active: PropTypes.bool
}

export default NavItem
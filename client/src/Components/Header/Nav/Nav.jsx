import React from 'react'
import NavItem from './NavItem/NavItem'

import './style.css'

const Nav = ({is_authenticated}) => {
    return (
        <nav className="nav">
                        <NavItem active={true} text="Головна" />
                        <NavItem text="Меню" />
                        <NavItem text="Про нас" />
                        <NavItem text="Корзина" />
                        {is_authenticated ? <NavItem text="Профіль" /> :
                                            <NavItem text="Вхід" />}
        </nav>
    )
}

export default Nav

import React from 'react'
import Nav from './Nav/Nav'

import './style.css'


const Header = () => {
    return (
        <header className="header sticky">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">Справжні лєгуміни</div>
                    <Nav is_authenticated={false} />
                </div>
            </div>
        </header>
    )
}

export default Header

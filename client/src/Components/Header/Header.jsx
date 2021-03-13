import React from 'react'

import './style.css'


const Header = () => {
    return (
        <header className="header sticky">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">Справжні лєгуміни</div>
                    <nav className="nav">
                        <a className="nav__link nav__active" href="#">Головна</a>
                        <a className="nav__link" href="#">Меню</a>
                        <a className="nav__link" href="/about/index.html">Про нас</a>
                        <a className="nav__link" href="#">Корзина</a>
                        {/* <!-- <a class="nav__link" href="#">Профіль</a> --> */}
                        <a className="nav__link" href="#">Вхід</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header

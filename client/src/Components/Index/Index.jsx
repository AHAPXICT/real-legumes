import React from 'react'

import './style.css'

const Index = () => {
    return (
        // <!-- Intro -->
        <>
            <div className="intro">
                <div className="container">
                    <div className="intro__inner">
                        <h1 className="intro__title">
                            Запрошуєм скуштувати найкращу випічку
                        </h1>
                        <h2 className="intro__subtitle">
                            Справжні, львівські лєгуміни,
                            <br />
                            які ви зможете замовити тільки в нас.
                        </h2>
                    </div>
                </div>
            </div>

            {/* // <!-- Section --> */}
            <section className="section">
                <div className="container">
                    <div className="section__inner">
                        <div className="section__block">
                            <div className="section__text">
                                <h2 className="section__title">
                                    Lorem ipsum dolor sit amet.    
                                </h2>
                                <p className="section__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui enim quas perferendis molestiae, reprehenderit sit soluta officiis odio aspernatur consequuntur voluptatem voluptates in, debitis velit architecto quos illo, sapiente id.
                                </p>
                                <p className="section__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui enim quas perferendis molestiae, reprehenderit sit soluta officiis odio aspernatur consequuntur voluptatem voluptates in, debitis velit architecto quos illo, sapiente id.
                                </p>
                            </div>
                        </div>
                        <div className="section__block">
                            <div className="section__image">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* // <!-- Special menu --> */}
            <section className="special_menu">
                <div className="container">
                    <div className="special_menu__title_block">
                        <h2 className='special_menu__title'>
                            Особливі лєгуміни
                        </h2>
                    </div>
                    <div className="slaider">
                        <div className="slider__item">
                            <div className="slider__content">
                                <h3 className="slider__content_title">Лєгумін 1</h3>

                                <h3 className="slider__content_title">Ціна: 200 грн</h3>

                                <h3 className="slider__content_title">200 грамів</h3>
                            </div>
                        </div>
                        <div className="slider__item">
                            <div className="slider__content">
                                <h3 className="slider__content_title">Лєгумін 2</h3>

                                <h3 className="slider__content_title">Ціна: 500 грн</h3>

                                <h3 className="slider__content_title">100 грамів</h3>
                            </div>
                        </div>
                        <div className="slider__item">
                            <div className="slider__content">
                                <h3 className="slider__content_title">Лєгумін 3</h3>

                                <h3 className="slider__content_title">Ціна: 400 грн</h3>

                                <h3 className="slider__content_title">300 грамів</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index
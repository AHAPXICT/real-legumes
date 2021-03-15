import React from "react";

import facebook_24_logo from "../../static/images/logo/facebook-24.png";
import instagram_24_logo from "../../static/images/logo/instagram-6-24.png";
import twitter_24_logo from "../../static/images/logo/twitter-24.png";
import pinterest_24_logo from "../../static/images/logo/pinterest-24.png";
import street_logo from "../../static/images/logo/street-view.png";
import phone_logo from "../../static/images/logo/phone.png";
import mail_logo from "../../static/images/logo/mail.png";

import "./style.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__black">
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__section">
                            <h3 className="footer__title">Про нас</h3>
                            <p className="footer__info">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Cumque, modi!
                            </p>
                            <div className="footer__social">
                                <img
                                    src={facebook_24_logo}
                                    className="footer__logo large_logo"
                                    alt=""
                                />
                                <img
                                    src={instagram_24_logo}
                                    className="footer__logo large_logo"
                                    alt=""
                                />
                                <img
                                    src={twitter_24_logo}
                                    className="footer__logo large_logo"
                                    alt=""
                                />
                                <img
                                    src={pinterest_24_logo}
                                    className="footer__logo large_logo"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="footer__section">
                            <h3 className="footer__title">Зв'яжіться з нами</h3>
                            <div className="footer__contact_block">
                                <img
                                    src={street_logo}
                                    className="footer__logo"
                                    alt=""
                                />
                                <p className="footer__info">
                                    6 E Esplanade, St Albans VIC 3021, Australia
                                </p>
                            </div>
                            <div className="footer__contact_block">
                                <img
                                    src={phone_logo}
                                    className="footer__logo"
                                    alt=""
                                />
                                <p className="footer__info">+91 80005 89080</p>
                            </div>
                            <div className="footer__contact_block">
                                <img
                                    src={mail_logo}
                                    className="footer__logo"
                                    alt=""
                                />
                                <p className="footer__info">
                                    support@domain.com
                                </p>
                            </div>
                        </div>
                        <div className="footer__section">
                            <h3 className="footer__title">Години роботи</h3>
                            <div className="footer__open_hours_block">
                                <p className="footer__info">
                                    Monday - Thursday
                                </p>
                                <p className="footer__info footer__time">
                                    11:00 AM - 9:00 PM
                                </p>
                            </div>
                            <div className="footer__open_hours_block">
                                <p className="footer__info">
                                    Friday - Saturday
                                </p>
                                <p className="footer__info footer__time">
                                    11:00 AM - 5:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

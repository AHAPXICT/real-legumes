import React from "react";

import Social from "./Social/Social";
import facebook_logo from "../../../static/images/logo/facebook-24-black.png";
import instagram_logo from "../../../static/images/logo/instagram-24-black.png";
import twitter_logo from "../../../static/images/logo/twitter-24-black.png";

import "./style.css";

const AboutProfile = ({ profile_image }) => {
    return (
        <div class="team__block">
            <img className="team__img" src={profile_image} alt="" />
            <div className="team__descr_block">
                <div className="team__container">
                    <h3 className="team__name">Roman Kalitovskyy</h3>
                    <p className="team__descr">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tenetur minima autem accusantium rem! Ut,
                        architecto recusandae, laudantium exercitationem
                        reiciendis, error voluptate tempore nam odit corrupti ab
                        culpa quas cumque! Beatae!
                    </p>
                    <hr />
                </div>
                <Social
                    images={[facebook_logo, instagram_logo, twitter_logo]}
                />
            </div>
        </div>
    );
};

export default AboutProfile;

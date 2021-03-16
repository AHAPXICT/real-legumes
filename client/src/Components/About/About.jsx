import React from "react";

import AboutProfile from "./AboutProfile/AboutProfile";
import img_me from "../../static/images/team/me.jpg";
import img_mary from "../../static/images/team/mary.jpg";

import "./style.css";

class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section className="team">
                <div className="container">
                    <h1 className="team__title">Наша команда</h1>
                    <h2 className="team__subtitle">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Reiciendis fugiat voluptatem dolorum sint quia
                        voluptatibus natus minima, a nisi! Quos voluptate harum
                        error fugiat soluta praesentium cupiditate ex
                        perspiciatis ea!
                    </h2>
                    <div className="team__section">
                        <AboutProfile profile_image={img_me} />
                        <AboutProfile profile_image={img_mary} />
                    </div>
                </div>
            </section>
        );
    }
}

export default About;

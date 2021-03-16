import React from "react";
import Intro from "./Intro/Intro";
import DescribeSection from "./DescribeSection/DescribeSection";
import SpecialMenu from "./SpecialMenu/SpecialMenu";

import "./style.css";

class Index extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Intro />
                <DescribeSection />
                <SpecialMenu />
            </>
        );
    }
}

export default Index;

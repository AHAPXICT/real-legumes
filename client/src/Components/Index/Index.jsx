import React from "react";
import Intro from "./Intro/Intro";
import DescribeSection from "./DescribeSection/DescribeSection";
import SpecialMenu from "./SpecialMenu/SpecialMenu";

import "./style.css";

const Index = () => {
    return (
        <>
            <Intro />
            <DescribeSection />
            <SpecialMenu />
        </>
    );
};

export default Index;

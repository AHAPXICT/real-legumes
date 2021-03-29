import React, { useEffect } from "react";
import Intro from "./Intro/Intro";
import DescribeSection from "./DescribeSection/DescribeSection";
import Slider from "./../Slider/Slider";

const Index = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <Intro />
            <DescribeSection />
            <Slider />
        </>
    );
};

export default Index;

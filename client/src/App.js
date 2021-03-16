import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Index from "./Components/Index/Index";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

// test slider
import Slider from "./Components/Slider/Slider";

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                {/* 
                  <Slider /> */}
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;

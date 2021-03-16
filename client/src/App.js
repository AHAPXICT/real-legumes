import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Index from "./Components/Index/Index";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import PageNotFound from "./Components/PageNotFound/PageNotFound"

// test slider
import Slider from "./Components/Slider/Slider";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    
                    <Route exact path="/">
                        <Index />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    {/* 
                    <Slider /> */}
                    <Route to='*'>
                        <PageNotFound/>
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

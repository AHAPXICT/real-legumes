import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import "./App.css"
import Header from "./Components/Header/Header"
import Index from "./Components/Index/Index"
import About from "./Components/About/About"
import Footer from "./Components/Footer/Footer"
import PageNotFound from "./Components/PageNotFound/PageNotFound"
import MenuContainer from './Components/Menu/MenuContainer'
import CategoryAdminPageContainer from './Components/AdminPages/CategoryAdminPageContainer/CategoryAdminPageContainer'
import IngredientAdminPageContainer from './Components/AdminPages/IngredientAdminPageContainer/IngredientAdminPageContainer'
import FileUploader from './Components/FileUploader/FileUploader'
import store from './Store/store'


function App() {
    return (
        <Provider store={store}>
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
                        <Route exact path='/menu'>
                            <MenuContainer />
                        </Route>
                        <Route exact path='/categories'>
                            <CategoryAdminPageContainer />
                        </Route>
                        <Route exact path='/ingredients'>
                            <IngredientAdminPageContainer />
                        </Route>
                        <Route exact path='/file'>
                            <FileUploader />
                        </Route>
                        <Route to='*'>
                            <PageNotFound/>
                        </Route>
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;

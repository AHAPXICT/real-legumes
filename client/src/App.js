import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider, useDispatch } from 'react-redux'
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
import LoginPage from './Components/LoginPage/LoginPage'
import RegisterPage from './Components/RegisterPage/RegisterPage'
import store from './Store/store'
import { useEffect } from "react"
import {SET_USER} from './Store/User/actions'
 

function App() {

    let is_admin = store.getState().user.user.admin;

    useEffect(() => {
        const token = sessionStorage.getItem('authToken')
        if (token) {
            fetch("http://127.0.0.1:5000/api/users/status", {
                        method: "GET",
                        headers: {
                            Authorization: 'Bearer ' + token,
                        },
                    })
                        .then((response) => {
                            if (response.ok) {
                                return response.json();
                            }
                        })
                        .then((data) => {
                            if (data) {
                            store.dispatch({type: SET_USER, payload: data})
                            is_admin = data.admin}
                        })
        };
    }, [])

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
                        <Route exact path='/login'> 
                            <LoginPage />
                        </Route>
                        <Route exact path='/register'> 
                            <RegisterPage />
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

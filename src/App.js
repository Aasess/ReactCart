import React from 'react'
import { useSelector } from 'react-redux';
// import { BrowserRouter as Router,Switch,Route }from "react-router-dom";

import './App.css'
import Login from './component/login/Login'
import Home from './component/home/Home'
import Cart from './component/cart/Cart'
import TrendingProductPage from './component/trendingProduct/TrendingProductPage'

import {BrowserRouter as Router,
        Switch,
        Route,Redirect

} from "react-router-dom"
const App = () => {
    const user = useSelector((state)=> state.user)
    return(
        //if user is logged in render profile componenet else render login component
        // user.loggedIn? <Home />:<Login />
        <Router>
            <Switch>
            <Route exact path="/">
                    {user.loggedIn? <Home />:<Login />}
            </Route>
                <Route exact path="/cart" component={Cart}>
                    {/* redirect to login page if not logged in */}
                    {!user.loggedIn && < Redirect to ='/'/>} 
                </Route>
                <Route exact path="/trendingproducts" component={TrendingProductPage}>
                    {/* redirect to login page if not logged in */}
                    {!user.loggedIn && < Redirect to ='/'/>} 
                </Route>
            </Switch>
        </Router>
        )
    
}

export default App;
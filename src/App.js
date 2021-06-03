import React from 'react'
import { useSelector } from 'react-redux';
// import { BrowserRouter as Router,Switch,Route }from "react-router-dom";

import './App.css'
import Login from './component/Login'
import Home from './component/Home'
import Cart from './component/Cart'
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
                <Route exact path="/cart" component={Cart}/>
            </Switch>
        </Router>
        )
    
}

export default App;
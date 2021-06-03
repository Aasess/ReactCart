import React from 'react'
import { useSelector } from 'react-redux';

import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'

const App = () => {
    const user = useSelector((state)=> state.user)
    return(
        //if user is logged in render profile componenet else render login component
        user.loggedIn? <Profile />:<Login />
        )
    
}

export default App;
import React from 'react';

import {useDispatch} from 'react-redux';
import {login} from '../features/userSlice'

const Login = () => {
    // //in order to use store.getState() function from our store
    // const user = useSelector(selectUser);

    //in order to use store.dispatch(action) function from our store
    const dispatch = useDispatch();

    const [username,setUserName] = React.useState("")
    const [password,setPassword] = React.useState("")

    const handleSubmit =(e) => {
            e.preventDefault();
            dispatch(login({
                username:username,
                loggedIn: true
            }))
    }
    return(
        <div className="login">
            <form className="login_form" onSubmit={(e)=> handleSubmit(e)}>
                <h1>Login Here</h1>
                <input 
                    type="text" 
                    name="Username" 
                    placeholder="Enter Username" 
                    value={username} 
                    onChange={(e)=>setUserName(e.target.value)}/>
                
                <input 
                    type="password" 
                    name="Password" 
                    placeholder="Enter Password" 
                    value={password} 
                    onChange={(e)=> setPassword(e.target.value)}/>
                
                <button 
                    type="submit">Login
                </button>
            </form>
        </div>
    )
}

export default Login;
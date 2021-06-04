import React from 'react';

import {useDispatch} from 'react-redux';
import {login} from '../features/userSlice'

import './Login.css'
const Login = () => {
    // //in order to use store.getState() function from our store
    // const user = useSelector(selectUser);

    //in order to use store.dispatch(action) function from our store
    const dispatch = useDispatch();

    const [username,setUserName] = React.useState("")
    const [password,setPassword] = React.useState("")

    const handleSubmit =(e) => {
            e.preventDefault();
            if(username === '' || password === ''){
                
            }else{
                dispatch(login({
                    username:username,
                    loggedIn: true
                }))
            }
    }
    return(
        <div className="container border rounded  bg-dark text-white box" style={{ position:"absolute", top:"20%"}}>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <h3 className="text-center mt-4 p-2">Enter your detail to proceed</h3>
                <hr/>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        name="Username" 
                        placeholder="Enter Username" 
                        value={username} 
                        onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                
                <div className="form-group">
                    <input 
                        type="password" 
                        className="form-control"
                        name="Password" 
                        placeholder="Enter Password" 
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                
                
                <button
                    className="form-control btn btn-large btn-success mb-4"
                    type="submit">Login
                </button>
            </form>
        </div>
    )
}

export default Login;
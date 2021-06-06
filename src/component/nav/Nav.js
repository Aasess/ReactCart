/* eslint-disable */
import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {logout} from '../../features/userSlice';
import {item,cartEmpty,searchItem,showSuggestionBox} from '../../features/productSlice'
import { Link, Redirect } from 'react-router-dom';

const Nav = (props) => {
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.user.username)
    
    const handleLogout = () => {   
        dispatch(item({
            product:null
        }))
        dispatch(logout())
        dispatch(cartEmpty({})) //empty the cart when logout is clicked
        dispatch(searchItem({
            value:null
        }))
    }

    const homeHandler=()=>{
        dispatch(item({
            product:null
        }))
        dispatch(searchItem({
            value:null
        }))
        props.catFunction && props.catFunction(null)
        props.value && <Redirect to = '/'/>

        dispatch(showSuggestionBox({
            value:false
        }))
    }
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark text-white ">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item active pt-2">
               <Link to ="/" ><a className="nav-link btn" onClick={()=> homeHandler()}><h4 id="homeicon"><i className="fa fa-home"></i> A and B Online Nepal</h4></a></Link>
            </li> 
        </ul>
        
    </div>
        <div className="mt-3 float-right">
            <p className="float-right">Welcome, <span style={{ color:'#32CD32' }}><strong>{user}</strong></span></p>
        </div>
        
        <Link to ="/" style={{color:"white"}}><a className="btn" onClick = {()=>handleLogout()}><span id="logout">Logout</span></a></Link>
    </nav>
        </div>
    )
}

export default Nav

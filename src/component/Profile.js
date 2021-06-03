import React from 'react'
import { useDispatch,useSelector } from 'react-redux';

import {logout} from '../features/userSlice'

export const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.user.username)
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            <h4>Welcome {user}</h4>
            <button onClick = {()=>handleLogout()}>Logout</button>
        </div>
    )
}
export default Profile;
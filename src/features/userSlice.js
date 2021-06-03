import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: null, //user hasnot logged in initially
    loggedIn: false
}

const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        login: (state,action) => {
            state.username = action.payload.username;
            state.loggedIn = action.payload.loggedIn;
        },

        logout: (state) => {
            state.username = null;
            state.loggedIn = false;
        }
    }
})

export const {login,logout} = userSlice.actions

// export const selectUser = (state) => {
//     return state.user.username
// }

export default userSlice.reducer

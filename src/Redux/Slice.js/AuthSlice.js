import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggin: localStorage.getItem('isLoggedIn') || false,  // That mean user Login or not and here is this property we derived from the 
                       //localStorage.getItem and hamere pass item hoga ('isLoggedIn') and if we have not found in local storage
                       // then it will be false 
    role: localStorage.getItem('role') || "", //what is the role of the users
    data: localStorage.getItem('data') || {} // user data like object and all thinks 


};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
});

//export const {} = authSlice.actions;
export default authSlice.reducer;
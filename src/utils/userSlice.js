import { createSlice } from "@reduxjs/toolkit";



const userSlice= createSlice({
    name:"login",
    initialState: null,
    reducers:{
        adduser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state)=>{
            return null
        }
    }
})

export const{adduser,removeUser}= userSlice.actions
export default userSlice.reducer;
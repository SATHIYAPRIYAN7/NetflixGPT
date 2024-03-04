import { createSlice } from "@reduxjs/toolkit";



const gptSlice = createSlice({
    name:"gptsearch",
    initialState:{
       togglesearch: false,
       moviename: null,
       result:null,
    },
    reducers:{
        addtogglesearch :(state,action)=>{
            state.togglesearch = !state.togglesearch
        },
        addresult :(state,action)=>{
            state.result=action.payload
        },
        addmoviename:(state,action)=>{
            state.moviename=action.payload
        }
    }
})

export const{addtogglesearch,addresult,addmoviename}=gptSlice.actions;
export default gptSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"Movies",
    initialState:{
        NowPlayingMovies:[],
        hero: {},
        Trailer: {},
        Popular:[],
        top:[],
        upcoming:[]
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
             state.NowPlayingMovies = action.payload;
        },
        addTrailer:(state,action)=>{
            state.Trailer = action.payload;
        },
        addPopular:(state,action)=>{
            state.Popular = action.payload;
        },
        addTop:(state,action)=>{
            state.top=action.payload;
        },
        addUpcoming:(state,action)=>{
            state.upcoming=action.payload;
        },
        addhero : (state,action)=>{
            //console.log(action)
            state.hero=action.payload;
        }
    }
})

export const{addNowPlayingMovies,addhero,addTop,addUpcoming,addTrailer,addPopular}= movieSlice.actions;
export default movieSlice.reducer;
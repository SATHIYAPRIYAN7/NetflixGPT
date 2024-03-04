import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";


const appstore = configureStore({
    reducer:{
    login : userSlice,
    Movies: movieSlice,
    gptsearch:gptSlice,
    }
})


export default appstore;
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addTop } from "../utils/movieSlice";
import { Api_Options } from "../utils/Constants";

 function useToprated(){
    const dispatch = useDispatch()

    async function TopMovies(){
      const response= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', Api_Options)
      const data = await response.json();

      if(data)
      dispatch(addTop(data?.results))
    
    }
    
    useEffect(()=>{
       TopMovies();
    },[])
}

export default useToprated;
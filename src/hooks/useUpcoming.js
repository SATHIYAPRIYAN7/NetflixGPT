import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {   addUpcoming } from "../utils/movieSlice";
import { Api_Options } from "../utils/Constants";

 function useUpcoming(){
    const dispatch = useDispatch()

    async function UpcomingMovies(){
      const response= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=2', Api_Options)
      const data = await response.json();

      if(data)
      dispatch(addUpcoming(data?.results))
    
    }
    
    useEffect(()=>{
       UpcomingMovies();
    },[])
}

export default useUpcoming;
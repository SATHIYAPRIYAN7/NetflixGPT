import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/movieSlice";
import { Api_Options } from "../utils/Constants";

 function usePopular(){
    const dispatch = useDispatch()

    async function PopularMovies(){
      const response= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', Api_Options)
      const data = await response.json();

      if(data)
      dispatch(addPopular(data?.results))
    
    }
    
    useEffect(()=>{
       PopularMovies();
    },[])
}

export default usePopular;
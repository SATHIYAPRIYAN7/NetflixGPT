import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { Api_Options } from "../utils/Constants";

 function useNowPlaying(){
    const dispatch = useDispatch()

    async function NowPlayingMovies(){
      const response= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=2', Api_Options)
      const data = await response.json();

      if(data)
      dispatch(addNowPlayingMovies(data?.results))
    
    }
    
    useEffect(()=>{
       NowPlayingMovies();
    },[])
}

export default useNowPlaying;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addTrailer } from "../utils/movieSlice";
import { Api_Options } from "../utils/Constants";

 function useTrailer(){
    const dispatch = useDispatch()
     const selector=useSelector(store=> store.Movies?.hero)

    async function trailerMovie(movieid){
      const response= await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, Api_Options)
      const data = await response.json();
      if (!data || !data.results || data.results.length === 0) {
         return;
       }
 
       const filteredList = data.results.filter((list) => list.type === "Trailer");
 
       if (filteredList.length === 0) {
         // Handle case when there are no trailer videos
         console.log("No trailer videos found for the movie.");
         return;
       }
      //console.log(filteredList[0])
      dispatch(addTrailer(filteredList[0]))
    
    }
    
    useEffect(()=>{
       trailerMovie(selector.id);
    },[selector])
}

export default useTrailer;
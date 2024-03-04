import React, { useEffect, useState } from 'react';
import TopSection from './TopSection';
import BottomSection from './BottomSection';
import useNowPlaying from '../hooks/useNowPlaying';
import { useDispatch, useSelector } from 'react-redux';
import useTrailer from '../hooks/useTrailer';
import usePopular from '../hooks/usePopular';
import useToprated from '../hooks/useToprated';
import useUpcoming from '../hooks/useUpcoming';
import { addhero } from '../utils/movieSlice';
import GptComponent from './GptComponent';
import Moreinfo from './Moreinfo';

function Browse() {
  const gpttoggle= useSelector(store => store.gptsearch.togglesearch)

  const[info,setinfo] =useState(false)
  useNowPlaying();
  usePopular();
  useToprated();
  useUpcoming();

  

 const dispatch=useDispatch();
  const selector = useSelector(store => store.Movies?.NowPlayingMovies)
      
  useEffect(()=>{
    dispatch(addhero(selector[0]));
  },[selector])
  
  const selector1 = useSelector((store1) => store1.Movies?.hero);

  if (!selector1 || selector1.length === 0) return null;

  return (
    <div className='min-h-screen '>
      {
        info &&  <div className='w-3/4 bg-black bg-opacity-90 m-auto h-screen fixed inset-0 z-50 text-7xl '>
          <Moreinfo showinfo={setinfo} infom={info}/>
        </div>
      }
      { gpttoggle ? <div> <GptComponent/> </div> 
       : <div>
        <TopSection select={selector1} showinfo={setinfo} infom={info} />
        <BottomSection />
      </div>}
    </div>
  );
}

export default Browse;

import React, { useEffect } from 'react'
import MovieVideoBaclground from './MovieVideoBaclground'
import MovieTitle from './MovieTitle'
import { useDispatch, useSelector } from 'react-redux'
import { addhero } from '../utils/movieSlice';
import useTrailer from '../hooks/useTrailer';

function TopSection({select ,showinfo,infom}) { 
  useTrailer()
      const {original_title , id ,overview} =select;
     
      const selector=useSelector(store => store.Movies?.Trailer)
 
  return (
    <div className='text-white '>
        <MovieTitle title={original_title} id={id} description={overview} showinfo={showinfo} infom={infom}/>
        <div className='absolute top-0 bottom-0 bg-black'>
           <MovieVideoBaclground  id={selector?.key}/>
        </div>
       
    </div>
  )
}

export default TopSection
import React, { useEffect, useState } from 'react'
import { Api_Options, Poster_Path } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addhero } from '../utils/movieSlice';
import trailer from '../hooks/useTrailer';
import useTrailer from '../hooks/useTrailer';
import { useNavigate } from 'react-router-dom';
import { addtogglesearch } from '../utils/gptSlice';

function SingleCard({path,obj}) {
   const dispatch = useDispatch();
   const gpttoggle= useSelector(store => store.gptsearch.togglesearch)
   const navigate=useNavigate();
  if(!path) return null;
 
  function handleclick(){
       //console.log(obj.id)
       dispatch(addhero(obj));
       window.scroll(0,0);
       //navigate("./browse")
       if(gpttoggle){
       dispatch(addtogglesearch())
      }
  }

  
  return (
        
        <img onClick={handleclick} src={Poster_Path+ path} className='w-36  sm:w-44 hover:scale-110' alt="posters"/>
   
  )
}

export default SingleCard
import React from 'react'
import trailer from '../hooks/useTrailer'
import { useSelector } from 'react-redux'

function MovieVideoBaclground({id}) {
  
  
   
   
  return (
<div className='bg-black'>
       <iframe className=' fixed top-0 2xl:-top-28 -z-10  left-0 w-screen min-h-screen aspect-video' src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&showinfo=0&controls=0&playlist=${id}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"  title="YouTube video player"  ></iframe>
   </div>
  )
}

export default MovieVideoBaclground
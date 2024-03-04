import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

function MovieTitle({title,id,description,showinfo,infom}) {
  return (
    <div className='text-white bg-gradient-to-r from-black z-10  h-screen  flex justify-center flex-col gap-3'>
      <div className=' bg-gradient-to-r from-black w-3/4 pl-5 py-96 sm:pl-20'><h1 className='text-3xl  font-bold mb-5'>{title}</h1>
      <p className='w-96 '>{description}</p>
      <div className='mt-5 flex'>
        <button className='bg-white px-10 font-bold mr-4 text-black py-2 flex justify-center items-center gap-3 rounded-md hover:bg-opacity-90'><FaPlay />Play</button>
        <button onClick={()=> showinfo(!infom)} className='bg-gray-500  hover:bg-opacity-90 px-6 font-bold py-3 bg-opacity-70 rounded-md flex justify-center items-center gap-2' ><IoIosInformationCircleOutline />More Info</button>
      </div></div> 
    </div>
  )
}

export default MovieTitle
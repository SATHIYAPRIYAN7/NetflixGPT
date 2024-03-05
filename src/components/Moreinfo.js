import React from 'react'
import { Poster_Path } from '../utils/Constants'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { useSelector } from 'react-redux';

function Moreinfo({infom,showinfo}) {
 const selector =useSelector(store => store.Movies?.hero)





  return (
    <div className=' sm:flex  gap-5'>
    <img className='w-full h-56 mt-4 px-24 md:h-auto md:mt-0 md:px-0  sm:w-auto' src={Poster_Path +selector?.poster_path}/>
    <div className='mt-8  pl-2 md:mt-20 pr-2'>
        <h1 className='text-white text-xl md:text-4xl font-bold'>{selector.original_title}</h1>
        <p className='text-white  text-sm md:text-base my-4 font-mono'>{selector.overview}</p>
        <p className='text-white text-sm  md:text-lg'>Language : English</p>
        <p className='text-white  text-sm md:text-lg my-4 mb-5'>Genre : Action , Adventure , Comedy , Adventure</p>
        <p className='text-white text-sm md:text-lg flex items-center gap-2 '>Rating : <div className={`text-white text-sm md:text-lg border-4 rounded-full w-min ${selector.vote_average.toFixed(1)> 6 ? "border-green-400" : "border-red-400" }  px-3 py-2  text-center`}>
       {selector.vote_average.toFixed(1)}
        </div></p>
        
        <div className='mt-8 flex'>
        <button className='bg-white px-10 font-bold mr-4 text-black py-2 flex justify-center text-sm md:text-lg items-center gap-3 rounded-md hover:bg-opacity-90'><FaPlay />Play</button>
        <button className='bg-gray-500  hover:bg-opacity-90 text-sm md:text-lg px-9 font-bold py-3  text-white bg-opacity-70 rounded-md flex justify-center items-center gap-2' ><FaRegShareFromSquare />
Share</button>
      </div>
    </div>

    <p className='text-white absolute top-3 right-3 text-3xl cursor-pointer' onClick={()=> showinfo(!infom)}><AiFillCloseCircle /></p>
    </div>
  )
}

export default Moreinfo
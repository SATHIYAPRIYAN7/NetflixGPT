import React, { useEffect, useRef, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import OpenAI from "openai";
import { Api_Options, Openai_Key } from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import {addmoviename, addresult} from '../utils/gptSlice'
import CardSection from './CardSection';
import Loading from './Loading';
function GptComponent() {

  const [loader,setloder]=useState(false)
    const dispatch = useDispatch();
    const moviename =useSelector(store=> store.gptsearch?.moviename)
    const result =useSelector(store=> store.gptsearch?.result)
    const openai = new OpenAI({
        apiKey: Openai_Key,dangerouslyAllowBrowser: true
    });

    const searchtext= useRef(null);
    let gptresult;

    async function searchmovies(res){
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${res}&include_adult=false&language=en-US&page=1`, Api_Options)
        const data = await response.json()
       // console.log(data)
        return data;
    }
  
    async function main() {
        const gptquery ="Act as a Movie Recommendation system and suggest some movies for the query : "+searchtext.current.value+" only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Don,Vallavan,Maari,Avatar,Vadachennai "
        const completion = await openai.chat.completions.create({
          messages: [{ role: "system", content: gptquery }],
          model: "gpt-3.5-turbo",
        });
      
         gptresult= completion.choices[0]?.message?.content.split(",");
       // console.log(gptresult);
        dispatch(addmoviename(gptresult))
      }

async function handleSearchclick(){
  setloder(true);
    await main();
    
    if (gptresult) {
        const mainResult = await Promise.all(gptresult.map((res) => searchmovies(res)));
       

        dispatch(addresult(mainResult))
      }
setloder(false)
}

console.log(result)

  return (
    <>
    { loader && <Loading/>}
    <div className=''>
        <div className='w-screen h-screen  
            before:fixed
            before:top-0
            before:left-0
            before:right-0
            before:bottom-0
            before:block
            before:bg-gradient-to-r
            before:from-black
            before:to-black
            before:opacity-60
            before:-z-20
            '>
<img className='fixed h-full w-full object-cover -z-20 bg-black backdrop-brightness-50' src='https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='mainimg' />
</div>
<div className='absolute w-screen rounded-lg overflow-hidden top-0 left-0 right-0 h-screen flex justify-center items-start pt-44'>

    <input ref={searchtext} className='w-3/4 lg:w-2/6 md:w-3/4 h-12 pl-2 rounded-l-lg outline-none' type="text" placeholder='What would you like to watch today?' />
    <button onClick={handleSearchclick} className='bg-red-500 h-12 px-5 rounded-r-lg text-lg font-bold text-white'><IoSearch /></button>
</div>
    
    <div className='-mt-60 z-40 bg-black bg-opacity-60 '>
        {
          moviename && result &&  moviename.map((name,index)=>{
              return <div className=''> <CardSection selector={result[index]?.results} name={name} /></div>
            })
            
        }
    </div>
    </div></>
  )
}

export default GptComponent
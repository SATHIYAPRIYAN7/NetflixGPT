import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/Firebase';
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { addhero } from '../utils/movieSlice';
import useTrailer from '../hooks/useTrailer';
import { addtogglesearch } from '../utils/gptSlice';

function Header() {

  const [navbg,setNavbg] = useState(false)
  const store = useSelector(store => store.login)
  const gpttoggle= useSelector(store => store.gptsearch.togglesearch)
   const dispatch = useDispatch();
   const navigate=useNavigate();

   useEffect(() => {
    const handleScroll = () => {
      
      const scrolledDown = window.scrollY > 10;

      setNavbg(scrolledDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handlesignout(){
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser(null));
    }).catch((error) => {
      // An error happened.
    }); 
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {

      if (user) {

        const {uid,email,displayName,photoURL} = user;
         dispatch(adduser({
          uid, email,displayName,photoURL
         }))
         navigate('/browse');
      } else {
        // User is signed out
          dispatch(removeUser(null))
          navigate('/');
      }
    });
  },[])

  function handleSearch(){
          dispatch(addtogglesearch())
  }

  function handleNav(e){

    if(e == 'Home' && gpttoggle){
    dispatch(addtogglesearch())
    }
  }
  return (
    <div className={`h-42 ${navbg ? "bg-black":"bg-gradient-to-b from-black"}  fixed top-0 left-0 right-0 z-20 m-auto px-4`}>
      <div className='w-full  flex justify-between items-center'>
        <div className='flex items-center'>
        <img className='w-28 sm:w-36 ml-1 sm:ml-2 mr-10 mt-2' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'  alt='logo'/>
          { store && <ul onClick={(e)=> handleNav(e.target.id)} className='text-white  hidden md:flex gap-4 cursor-pointer'>
            <li className='hover:text-red-500'  id='Home'>Home</li>
            <li className='hover:text-red-500' id="Movies">Movies</li>
            <li className='hover:text-red-500' id="Tv">Tv Series</li>
          </ul>}
          </div>
          
        {  store && <div className='flex items-center'>
          <div> 
            <button onClick={handleSearch} className='flex items-center text-sm sm:text-base gap-1 text-white mr-4 bg-lime-600 px-2 py-1 rounded-lg hover:bg-green-800'> {!gpttoggle ? <><p className='hidden sm:block' >GPT Search </p><IoSearch className='text-2xl sm:text-base text-white'  /></> : "Homepage"}</button>
          </div>
           <img src='https://cdn-icons-png.flaticon.com/128/2202/2202112.png' className='w-7 sm:w-8 mr-1' alt='profileimage'/> 
          <p className='text-white text-sm sm:text-base mr-2 '>{store?.displayName}</p>
          <button className='text-white text-sm sm:text-base px-2 py-1 rounded-md bg-red-600 mx-4 hover:bg-red-700' onClick={handlesignout}>Sign out</button>
        </div>}</div>
    </div>
  )
}

export default Header
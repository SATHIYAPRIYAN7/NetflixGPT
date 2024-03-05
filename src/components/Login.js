import React, { useRef, useState } from 'react'
import { validation } from '../utils/Validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adduser } from '../utils/userSlice';
import Loading from './Loading';


function Login() {
  const [loader,setloder]=useState(false)
  const navigate=useNavigate();
  const dispatch= useDispatch();

    const [isSignin,setIssignin]=useState(false);
    const [errorMessage,seterrormessage]=useState(null);

    const username= useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    function handleSignin(){
        setIssignin(!isSignin)
        setloder(false)
    }


    function handleClick(){
      
         const message=validation(email.current.value,password.current.value);
         seterrormessage(message)
         if(message) return;
setloder(true);
         if(isSignin){
         createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    updateProfile(user, {
      displayName:username.current.value, photoURL: ""
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(adduser({
       uid, email,displayName,photoURL
      }))
      setloder(false)
       // navigate('/browse')
    }).catch((error) => {
      // An error occurred
      console.log("login failed")
      setloder(false)
    });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage("User already exists Please sign in")
    setloder(false)
  });
  setloder(false)
}else{
        
  signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setloder(false)
        //navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode + " "+ errorMessage)
    setloder(false)
  });
}

    }

   


  return (
    <>
         
    <div className='w-screen h-screen  
            before:absolute
            before:inset-0
            before:block
            before:-z-10
            before:bg-gradient-to-r
            before:from-black
            before:to-black
            before:opacity-60
            '>
<img className='absolute h-full w-full object-cover -z-10 bg-black backdrop-brightness-50' src='https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='mainimg' />
</div>

<div className='absolute inset-0 z-40 flex justify-center items-center'>
{loader && <Loading/>} 
    <div className='bg-slate-950 rounded-lg bg-opacity-60 flex mx-6'>
        <form onSubmit={(e)=> e.preventDefault()} className=" p-6 px-9 rounded flex  flex-col">
          <h1 className="text-3xl mt-5 mb-10 text-white font-bold">{!isSignin? "Sign In" : "Sign Up"}</h1>
          {
            isSignin && <input className="w-72 sm:w-80 mb-6 text-white p-2  border bg-transparent py-3 border-gray-300 rounded" type='text' ref={username} placeholder='Username' />
          }
          <input className="w-72 sm:w-80 mb-6 text-white p-2  border bg-transparent py-3 border-gray-300 rounded" ref={email} type='text' placeholder='Email or phone number' />
          <input ref={password} className="w-72 sm:w-80 text-white p-2 mb-7 border bg-transparent py-3 border-gray-300 rounded" type='password' placeholder='Password' />
          <button onClick={()=>handleClick()} className="bg-red-600 text-white p-2 rounded">{!isSignin? "Sign In" : "Sign Up"}</button>

          {
            <p className='text-red-300 max-w-80 sm:w-80 mt-2'>{errorMessage}</p>
          }

          <p className=' mt-14 text-gray-400 mb-6'>{!isSignin? "New to Netflix?" : "Already a user?"} <span className='text-white ml-1 cursor-pointer' onClick={handleSignin}>{!isSignin? "Sign up now" : "Sign in now"}</span></p>
        </form></div>
      </div>


    </>
  )
}

export default Login
import React from 'react'
import CardSection from './CardSection'
import { useSelector } from 'react-redux';

function BottomSection() {

  const selector1=useSelector(store => store.Movies?.NowPlayingMovies)
   
  const selector2=useSelector(store => store.Movies?.Popular)
  const selector3=useSelector(store => store.Movies?.top)
  const selector4=useSelector(store => store.Movies?.upcoming)


  return (
    <div className='min-h-screen bg-black'>
        <div className='absolute -mt-28 '>
        <CardSection selector={selector1} name={"Now Playing"} />
       </div> 
       <div className='pt-52'>
          <CardSection selector={selector2} name={"Popular"} />
        </div>
        <div className='mt-5'>
          <CardSection selector={selector3} name={"Top Rated"} />
        </div>
        <div className='mt-5 pb-9'>
          <CardSection selector={selector4} name={"Upcoming"} />
        </div>
        
    
    </div>
  )
}

export default BottomSection
import React from 'react'
import { useSelector } from 'react-redux';
import SingleCard from './SingleCard';
import  useTrailer from '../hooks/useTrailer'

function CardSection({ selector, name }) {

 

  if (!selector || selector.length === 0) {
    return null;
  }
     
  return (
    <div className='pl-4 md:pl-10 max-w-screen '>
      <h1 className='text-white mb-2 font-bold text-2xl'> {name}</h1>
      <div className=' overflow-x-scroll overflow-y-hidden scrollbar-hide'>

        <div className=' flex gap-3 '>
          {
            selector?.map((card) => {
              //console.log(card)
              return (
                <SingleCard key={card.id} obj={card} path={card.poster_path} />
              )

            })
          }

        </div>
      </div>
    </div>
  )
}

export default CardSection

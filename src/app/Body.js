import React from 'react'
import Appp from './ClassComp'


function Body() {

  function handleClick(e,a){
    e(!a)
  }
  return (
    <div>
   <Appp title={"title1"} />
   <Appp title={"title2"}/>
   <Appp title={"title3"} />
    </div>
  )
}

export default Body
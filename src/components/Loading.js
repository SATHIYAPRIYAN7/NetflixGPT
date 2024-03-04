import React from 'react';
import loadingGif from './1490.gif';

function Loading() {
  return (
    <div className='w-screen h-screen fixed top-0 z-50 flex justify-center items-center bg-black bg-opacity-65'>
      <img src={loadingGif} alt="Loading" />
    
    </div>
  );
}

export default Loading;

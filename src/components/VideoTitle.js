import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[13%] px-24 absolute text-white 
    bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 overflow-hidden text-md w-1/4' >{overview}</p>
      <div>
    
        <button className='bg-white text-black p-2 px-9 mx-1 rounded-lg font-semibold hover:bg-opacity-70'>
           Play</button>
        <button className='bg-gray-600 text-white p-2 px-8 mx-1 rounded-lg font-semibold hover:bg-opacity-70'>
            More Info</button>
        
      </div>
    </div>
  )
}

export default VideoTitle

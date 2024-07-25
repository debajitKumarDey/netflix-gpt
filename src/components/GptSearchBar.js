import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[8%] flex justify-center'>
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg" >
      
        <input type="text" className='p-4 m-2 col-span-9 rounded-md' 
        placeholder='What Would you Like To Watch Today' />

        <button className="py-2 px-4 m-2 bg-red-700 col-span-3
         text-white rounded-lg text-2xl font-medium">
            Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar;

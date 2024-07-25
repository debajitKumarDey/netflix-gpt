import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { bgImg } from '../utils/constant';

const GptSearch = () => {
  return (
    <div>
         <div className='absolute -z-10 opacity-80'>
                <img className=' ' src={bgImg}
                    alt="background img"
                />
                </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;

import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { bgImg } from '../utils/constant';

const GptSearch = () => {
  return (
    <>
         <div className='fixed -z-10 opacity-80'>
                <img className='h-screen object-cover md:h-fit ' src={bgImg}
                    alt="background img"
                />
                </div>
                <div className=''>
      <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
    </>
  );
}

export default GptSearch;

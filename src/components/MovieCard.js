import React from 'react'
import { Img_Cdn_url } from '../utils/constant';

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className='w-[160px] pr-4'>
      <img alt="Movie card img" src={Img_Cdn_url+posterPath} />
    </div>
  )
}

export default MovieCard;

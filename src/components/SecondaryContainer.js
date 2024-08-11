import React from 'react'
import Movielist from './Movielist';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies &&(
    <div className=' bg-black' >
    <div className='mt-0 md:-mt-[17%] relative z-20'>
      <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <Movielist title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
      <Movielist title={"Popular Movies"} movies={movies.popularMovies}/>
      <Movielist title={"Upcoming Movies"} movies={movies.upComingMovies}/>
    </div>
    </div>  
    )
  );
};

export default SecondaryContainer;

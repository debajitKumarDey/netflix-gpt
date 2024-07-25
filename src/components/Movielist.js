import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({title, movies}) => {
    console.log(movies);
  return (
    <div className='px-4 text-white '>
        <h1 className='text-3xl font-semibold py-4 ml-4'>{title}</h1>
        <div className='flex overflow-y-scroll no-scrollbar'>
            <div className='flex'>
               {movies?.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path}/>
            ))} 
            
            </div>
        </div>
     
    </div>
  )
}

export default Movielist

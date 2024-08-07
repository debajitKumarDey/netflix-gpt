import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({title, movies}) => {
    
  return (
    <div className='px-4 text-white '>
        <h1 className='text-3xl font-semibold py-4 ml-16'>{title}</h1>
        <div className='flex overflow-hidden hover:overflow-x-scroll '>
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

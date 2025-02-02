import { api_option } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  addPopularMovies } from '../../utils/movieSlice';

const usePopularMovies =()=> {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);

  const getPopularMovies = async ()=> {
    const data = await fetch
    ('https://api.themoviedb.org/3/movie/popular?page=1', 
        api_option
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }
  useEffect(()=> {
    !popularMovies && getPopularMovies()
  },[])
};
export default usePopularMovies;
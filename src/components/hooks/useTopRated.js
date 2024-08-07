import { api_option } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  addTopRatedMovies } from '../../utils/movieSlice';

const useTopRatedMovies =()=> {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

  const getTopRatedMovies = async ()=> {
    const data = await fetch
    ('https://api.themoviedb.org/3/movie/top_rated?page=1', 
        api_option
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  }
  useEffect(()=> {
    !topRatedMovies && getTopRatedMovies()
  },[])
};
export default useTopRatedMovies;
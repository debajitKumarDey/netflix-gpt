import { api_option } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUpComingMovies } from '../../utils/movieSlice';

const useUpComingMovies =()=> {
    const dispatch = useDispatch();
    const upComingMovies = useSelector(store => store.movies.upComingMovies);

  const getUpComingMovies = async ()=> {
    const data = await fetch
    ('https://api.themoviedb.org/3/movie/upcoming?page=1', 
        api_option
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  }
  useEffect(()=> {
    !upComingMovies && getUpComingMovies()
  },[])
};
export default useUpComingMovies;
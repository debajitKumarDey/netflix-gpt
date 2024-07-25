import { api_option } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addNowPlayingMovies } from '../../utils/movieSlice';

const useNowPlayingMovies =()=> {
    const dispatch = useDispatch();

  const getNowPlayingMovies = async ()=> {
    const data = await fetch
    ('https://api.themoviedb.org/3/movie/now_playing?page=1', 
        api_option
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }
  useEffect(()=> {
    getNowPlayingMovies()
  },[])
};
export default useNowPlayingMovies;
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { api_option } from "../../utils/constant";
import { addTrailerVideo } from "../../utils/movieSlice";

const useMovieTrailer = (movieId)=> {

    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.movies.trailerVideo);


    const getMovieVideo = async ()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +
            '/videos?language=en-US', api_option);
        const json = await data.json();
        const filterData = json.results.filter(video => video.name === "Official Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
    
        dispatch(addTrailerVideo(trailer))
    };
    useEffect(()=> {
        !trailerVideo && getMovieVideo();
    }, []);

}
export default useMovieTrailer;
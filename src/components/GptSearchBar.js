import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import lang from './langConst';
import openai from './OpenAI';
import { api_option } from '../utils/constant';
import  { addGptMovieResult} from "../utils/gptSlice"

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const gptSearchText = useRef(null);
  const searchInTMDB = async (movie)=> {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' + 
      movie + 
      '&include_adult=false&language=en-US&page=1', 
      api_option);
      const json = await data.json()
      return json.results;
  };

  const handleGptSearchclick = async () => {
    console.log(gptSearchText.current.value);

    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query :" +
     gptSearchText.current.value + 
    ". only give me names of 5 movies, comma separeted like the example resulta ahead. Example Result: Gadar, Sholay, Don, Koi Mil Gaya, Dhol ";
    
    const Gptresults = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });

  console.log(Gptresults.choices?.[0]?.message?.content);
  const gptMovieList = Gptresults.choices?.[0]?.message?.content.split(",");

  const promiseArray = gptMovieList.map((movie)=> searchInTMDB(movie));
  const tmdbResults = await Promise.all(promiseArray);

  dispatch(addGptMovieResult({movieNames: gptMovieList, movieResults: tmdbResults})
);
  
  };

  return (
    <div className='pt-[50%] md:pt-[10%] flex justify-center'>
      <form className="w-full m-2 md:w-1/2 bg-black grid grid-cols-12 rounded-lg" 
      onSubmit={(e)=> e.preventDefault()}>
      
        <input type="text" className='p-1 md:p-4 m-2 col-span-8 md:col-span-9 text-black rounded-md' 
        placeholder={lang[langKey].gptPlaceholder} />

        <button className="md:py-2 md:px-4 m-2 bg-red-700 col-span-4 md:col-span-3
         text-white rounded-lg text-2xl font-medium"
         onClick={handleGptSearchclick}>
            {lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;

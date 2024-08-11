import React from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { adduser, removeuser } from '../utils/userSlice';
import { displayImg, logo, supportedLang } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
   
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);

  const handleSignout =()=> {
signOut(auth)
.then(() => {
})
. catch((error) => {
  navigate('/error')
});
  };

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, photoURL }= user;
        dispatch(adduser(
          {uid: uid, email: email,
             photoURL: photoURL})
            );
        
       navigate("/browse");
      } else {
          dispatch(removeuser());
          navigate("/");
      }
    });
    return ()=> unsubscribe();
  
  }, [])

const handleGptSearchClick = ()=> {
  dispatch(toggleGptSearchView());
}
const handleLanguageChange=(e)=> {
 dispatch(changeLanguage(e.target.value))
}

  return (
    <div className='flex flex-col md:flex-row justify-between absolute w-full
     px-8 py-1 bg-gradient-to-b from-black z-10'>
      <img className='w-40 mx-auto md:mx-0' src={logo}
       alt="logo" />
    {user && (
      <div className='flex p-2 '>
        {showGptSearch &&(
        <select className='p-2 bg-gray-700 text-white m-3 rounded-lg'
        onChange={handleLanguageChange}>
      {supportedLang.map(lang =>
             <option key={lang.identifier} 
             value={lang.identifier}>{lang.name}
             </option>)}
        </select>
       ) 
       }

        <button className='p-1 m-4 md:px-5 md:m-3 bg-purple-600 hover:bg-purple-500
         text-white font-semibold rounded-lg' onClick={handleGptSearchClick}>
          {showGptSearch? "Home" : 'GPT Search'}</button>
        <img className=' w-7 h-7 md:w-10 md:h-10 mx-1 my-4 md:mx-4 md:my-2' src={displayImg}
        alt="user-icon" />
        <button className='mx-1 md:mx-0 font-bold text-white' onClick={handleSignout}>Sign Out</button>
       </div>
        )} 
    </div>
     )
  
}

export default Header; 

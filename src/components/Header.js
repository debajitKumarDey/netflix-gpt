import React from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { adduser, removeuser } from '../utils/userSlice';
import { displayImg, logo } from '../utils/constant';

const Header = () => {
   
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

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
  return (
    <div className='flex justify-between absolute w-full px-8 py-1 bg-gradient-to-b from-black z-10'>
      <img className='w-40' src={logo}
       alt="logo" />
    {user && (<div className='flex p-2 '>
        <img className='w-10 h-10 mx-4 my-2' src={displayImg}
        alt="user-icon" />
        <button className='font-bold text-white' onClick={handleSignout}>Sign Out</button>
       </div>
        )} 
    </div>
     )
  
}

export default Header; 

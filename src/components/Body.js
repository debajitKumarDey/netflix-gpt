import React, { useEffect } from 'react'
import LogIn from './LogIn'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { adduser } from '../utils/userSlice'
import { removeListener } from '@reduxjs/toolkit'

const Body = () => {
  const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
           path: "/",
           element: <LogIn/> 
        },
        {
            path: "/browse",
            element: <Browse/> 
         }
]);

useEffect(()=> {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const {uid, email, displayName, photoURL }= user;
      dispatch(adduser(
        {uid: uid, email: email,
           displayName: displayName, 
           photoURL: photoURL})
          );
      
     
    } else {
        dispatch(removeListener());
    }
  });

}, [])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}
 
export default Body

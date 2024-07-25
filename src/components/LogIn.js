import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import { 
    createUserWithEmailAndPassword , 
    signInWithEmailAndPassword , 
    updateProfile } 
    from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/userSlice';
import { bgImg, displayImg } from '../utils/constant';


const LogIn = () => {
    const [isSignInForm, setissignInForm] = useState(true);
    const [errorMessage, seterrorMessage]= useState(null);
    const dispatch = useDispatch

    const email = useRef(null);
    const password = useRef(null);
    const Name = useRef(null);
    

    const handleButtonClick = () => {
        const message = checkValidateData
        (email.current.value, password.current.value);
        seterrorMessage(message);
        if(message) return;

        if(!isSignInForm){
            createUserWithEmailAndPassword
            (auth,email.current.value, password.current.value)
  .then((userCredential) => {
   
    const user = userCredential.user;
    updateProfile(user, {
        displayName: Name.current.value, photoURL: displayImg ,
      }).then(() => {
        const {uid, email, photoURL }= auth.currentUser;
            dispatch(
                adduser(
              {uid: uid, email: email,
                 photoURL: photoURL})
                );
       
      }).catch((error) => {
        seterrorMessage(error)
      });
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode + "-" +errorMessage)
    // ..
  });
        }
        else{
            signInWithEmailAndPassword
            (auth, email.current.value, password.current.value)
  .then((userCredential) => {
  
    const user = userCredential.user;
    
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode + "-" +errorMessage);
  });

    }
      
    };
    const toggleSignInForm = () => {
        setissignInForm(!isSignInForm)
    };
    return (

        <div>
            <Header />
            <div className='absolute'>
                <img className=' ' src={bgImg}
                    alt="background img"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()}
                className='w-[420px] absolute mx-auto my-36 right-0 left-0 p-12
             bg-black text-white opacity-85'>
                <h1 className='font-bold text-3xl py-3  '>
                    {isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm &&
                    <input  type="text" placeholder='Full Name'
                        className='my-2 p-3 w-full rounded-sm bg-gray-900 border border-gray-500'
                    />}
                <input ref={email} type="text" placeholder='Email Address'
                    className='my-2 p-3 w-full rounded-sm bg-gray-900 border border-gray-500'
                />
                <input ref={password} type="text" placeholder='Password'
                    className='my-2 p-3 w-full rounded-sm bg-gray-900 border border-gray-500'
                />
                <p className='text-red-500'>{errorMessage}</p>

                <button className='px-4 py-2 my-2  w-full text-white bg-red-700 rounded-md'
                    onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className='py-4 cursor-pointer' onClick={toggleSignInForm} >
                    {isSignInForm ? "New to Netflix Sign Up Now" :
                        "Already Registered ? Sign In"}</p>


            </form>
        </div>

    );
};

export default LogIn;

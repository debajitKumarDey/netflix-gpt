import React, { useState } from 'react'
import Header from './Header';

const LogIn = () => {
    const [isSignInForm, setissignInForm] = useState(true);
    const toggleSignInForm = () => {
        setissignInForm(!isSignInForm)
    }
    return (

        <div>
            <Header />
            <div className='absolute'>
                <img className=' ' src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"
                    alt="background img"
                />
            </div>
            <form className='w-[420px] absolute mx-auto my-36 right-0 left-0 p-12
             bg-black text-white opacity-85'>
                <h1 className='font-bold text-3xl py-3  '>
                    {isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && 
                    <input type="text" placeholder='Full Name'
                    className='my-2 p-3 w-full rounded-sm bg-gray-900 border border-gray-500'
                />}
                <input type="text" placeholder='Email Address'
                    className='my-2 p-3 w-full rounded-sm bg-gray-900 border border-gray-500'
                />
                <input type="text" placeholder='Password'
                    className='my-2 p-3 w-full rounded-sm bg-gray-900 border border-gray-500'
                />
                <button className='px-4 py-2 my-2  w-full text-white bg-red-700 rounded-md'>
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

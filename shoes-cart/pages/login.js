import React from 'react';
import Link from 'next/Link'
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from 'next/router';
import 'tw-elements'
const Login=()=>{
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  
  const handleChange=(e)=>{
    if(e.target.name =='email'){
      setEmail(e.target.value)

    }

else if(e.target.name =='password'){
  setPassword(e.target.value)
}

  }
  const handleSubmit=async(e)=>{
    console.log("helleee")
    e.preventDefault()
  
    const data = {email,password};

  let res= await fetch('http://localhost:3000/api/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
     let response=await res.json()
     console.log(response)
    
    setEmail('')
    setPassword('')
    if(response.success){
      localStorage.setItem("token",response.token)
    toast.success('Logged In!!🥳', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
      setTimeout(() => {
        Router.push('http://localhost:3000')
      }, 2000);
   
    }
    else{
      toast.error(response.error, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      
    }
    }
  //  useEffect(()=>{
  //   if(localStorage.getItem('token')){
  //     Router.push('/')
  //   }
  //   else{
  //     Router.push('/Login')
  //   }
  //  },[])
  return (
    <div>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
   <section className="flex min-h-full items-center justify-center  px-4 sm:px-6 lg:px-8 mt-28 py-12 bg-white mb-10">
     
     <div className="px-6 h-full text-gray-800 ">
       <div
         className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
       >
         <div
           className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
         >
           <img
             src="https://contents.mediadecathlon.com/p2175419/b47a6f36a16314982507e3f1896d787a/p2175419.jpg?format=auto&quality=70&f=650x0"
             className="mx-auto h-full w-auto hover:-rotate-6"
             alt="Sample image"
           />
         </div>
         <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
           <form onSubmit={handleSubmit}>
             <div className="flex flex-row items-center justify-center lg:justify-start">
             <h2 className="mb-16 text-center text-3xl font-bold t text-black items-center justify-center">Sign in to your account</h2>
               
             </div>
   
            
   
             
             <div className="mb-6">
               <input
                 type="email"
                 className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 id="email"
                 name='email'
                 placeholder="Email address"
                 onChange={handleChange}
                 value={email}
               />
             </div>
   
             
             <div className="mb-6">
               <input
                 type="password"
                 className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 id="password"
                 placeholder="Password"
                 name='password'
                 value={password}
                 onChange={handleChange}
               />
             </div>
   
             
   
             <div className="text-center lg:text-left">
             <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={handleSubmit}
               >
              LogIn
               </button>
               <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                 Don't have an account?
                 <Link href={'/signUp'} legacyBehavior>
                 <a
                   href="#!"
                   className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                   >Sign Up</a
                 ></Link>
               </p>
             </div>
           </form>
         </div>
       </div>
     </div>
   </section>
   </div>
  )
}
export default Login

import React, { useState,useEffect } from 'react'
import 'tw-elements'
import Link from 'next/link'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from 'next/router';
const SignUp = ({user}) => {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  
  const handleChange=(e)=>{
if(e.target.name =='name'){
  setName(e.target.value)
}
else if(e.target.name =='email'){
  setEmail(e.target.value)
 
}
  

else if(e.target.name =='password'){
  setPassword(e.target.value)
}

  }
const handleSubmit=async(e)=>{
    e.preventDefault();
    if(name==''&&email==''&&password==''){
      toast.error('Please Fill the details', {
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
    else{
  console.log('helle');
    const data = {name,email,password};

  let res= await fetch('http://localhost:3000/api/signup', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
     let response=await res.json()
     console.log(response)
    setName('')
    setEmail('')
    setPassword('')
    // toast.success('Account created succefully🥳', {
    //   position: "top-center",
    //   autoClose: 3000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "colored",
    //  // log message
        
      
    
    if(response.success){
   toast.success('Account created succefully🥳', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
        });
    Router.push('/')
    }
    else{
      toast.error('account already exists', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
          });
    }}
  }
    
    // useEffect(()=>{
    //   if(localStorage.getItem('token')){
    //     Router.push('/')
    //   }
    // })

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
     <section className="flex min-h-full items-center justify-center  px-4 sm:px-6 lg:px-8 mt-28 py-12 bg-white">
     
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
           <form  method="POST" action='#' onSubmit={handleSubmit}> 
             <div className="flex flex-row items-center justify-center lg:justify-start">
             <h2 className="mb-16 text-center text-3xl font-bold t text-black items-center justify-center">Sign Up</h2>
               
             </div>
   
             <div className="mb-6">
               <input
                 type="text"
                 name='name'
                 className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 id="name"
                 placeholder="Enter name"
                 value={name}
                 onChange={handleChange}
               />
             </div>
   
             
             <div className="mb-6">
               <input
                 type="email"
                 name='email'
                 className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 id="email"
                 placeholder="Email address"
                 value={email}
                 onChange={handleChange}
               />
             </div>
   
             
             <div className="mb-6">
               <input
                 type="password"
                 className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 id="password"
                 name='password'
                 placeholder="Password"
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
  Sign Up
</button>
               <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                 Already have an account?
                 <Link href={'/Login'} legacyBehavior>
                 <a
                   href="#!"
                   className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                   >LogIn</a
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

export default SignUp

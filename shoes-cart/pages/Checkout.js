import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
const Checkout=()=>{
    return(
        <>
        <div className="accordion" id="accordionExample5">
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingOne5">
      <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        text-2xl
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
        aria-controls="collapseOne5">
        Checkout 
      </button>
    </h2>
    <div id="collapseOne5" className="accordion-collapse collapse show" aria-labelledby="headingOne5">
    <div className='font-bold text-3xl text-center mt-10'>Delivery Details</div>
    <div className="mx-auto flex my-2">
      <div className="px-2 w-1/2">
      <div class="mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      </div>
      <div className="px-2 w-1/2">
      <div class=" mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      </div>
     </div>
     <div className="px-2 w-full">
      <div class=" mb-4">
        <label for="address" className="leading-7 text-sm text-gray-600">Address</label>
     
       <textarea name="address" id="address" cols="30" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div className="mx-auto flex ">
      <div className="px-2 w-1/2">
      <div class="mb-4">
        <label for="Phone" className="leading-7 text-sm text-gray-600">Phone</label>
        <input type="Phone" id="Phone" name="Phone" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      </div>
      <div className="px-2 w-1/2">
      <div class=" mb-4">
        <label for="city" className="leading-7 text-sm text-gray-600">City</label>
        <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      </div>
     </div>
     <div className="mx-auto flex m">
      <div className="px-2 w-1/2">
      <div class="mb-4">
        <label for="state" className="leading-7 text-sm text-gray-600">State</label>
        <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      </div>
      <div className="px-2 w-1/2">
      <div class=" mb-4">
        <label for="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
        <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      </div>
     </div>
      </div>
    </div>
  </div>
  
  
</div>
<div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingTwo5">
      <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-2xl text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5" aria-expanded="false"
        aria-controls="collapseTwo5">
       Review Your Cart And Pay
      </button>
    </h2>
    <div id="collapseTwo5" class="accordion-collapse collapse" aria-labelledby="headingTwo5">
    <div className="  bg-cyan-200 p-6 m-2" >
    <ol className='list-decimal font-semibold'>
    <div className='mt-5 my-5 text-red-600'><p>😢 😢Sorry your cart is empty!</p></div>
    <li>
    <div className="flex my-5 item">
      <div className='font-semiboldbold'></div>
      <div className='w-1/3 flex items-center justify-center cursor-pointer'><AiFillPlusCircle className='mx-1 text-4xl '/></div>
      </div>
    </li>
        </ol>
        <span className='total'>SubTotal:</span>
        </div>
        <button className='bg-green-500 w-48 rounded-xl p-5 text-white border-10 mt-8 mb-10 flex items-center justify-center' >Pay₹</button>
    </div>
  </div>
        </>
    )
}
export default Checkout
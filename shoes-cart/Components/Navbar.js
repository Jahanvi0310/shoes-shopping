import React from 'react'
import { useState } from 'react';
import ShoppingCart from '../pages/shoppingCart';
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header className="text-black body-font shadow-xl border-solid border-2 bg-cyan-500">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center md:justify-start 'sticky top-0 z-10'">

    <a className="flex title-font font-medium items-center text-gray-900 mb-4  mr-auto md:mx-1">
   
      <Image src='/images.jpg' width={50} height={10} className='rounded-lg hover:-rotate-3'></Image></a>
      <Link href={'/'}>
      <span className="ml-2 text-xl ">ShoeMart.com</span></Link>
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center font-bold  text-xl">
  <Link href='/Formal' legacyBehavior><a className="mr-5 hover:text-gray-900">Formal</a></Link>
      <Link href='/Sneaker' legacyBehavior><a className="mr-5 hover:text-gray-900">Sneaker</a></Link>
      <Link href='/Sport' legacyBehavior><a className="mr-5 hover:text-gray-900">Sport</a></Link>
      <Link href='/Slipers' legacyBehavior><a className="mr-5 hover:text-gray-900">Slipers</a></Link>
    </nav>
    <div className=" inline-flex items-center border-0 py-1 px-6 focus:outline-none rounded text-base mt-4  absolute right-0 mb-4 md:mb-3 " >
    <Link href={'/login'}><button className="mx-2 rounded-md py-1 px-2 cursor:pointer space-x-4 bg-white">Login
    
    </button></Link>
   
    <AiOutlineShoppingCart className='text-3xl md:text-4xl cursor-pointer hover:rotate-6' onClick={handleClick} />
    </div>
  </div>
  
    
  <ShoppingCart isOpen={isOpen} setIsOpen={setIsOpen}/>
  
</header>
    </>
  )
}

export default Navbar

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <header className="text-black body-font shadow-xl border-solid border-2 bg-cyan-500">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">

    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
   
      <Image src='/images.jpg' width={50} height={10} className='rounded-lg hover:-rotate-3'></Image></a>
      <Link href={'/'}>
      <span className="ml-3 text-xl">ShoeMart.com</span></Link>
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center font-bold text-xl">
  <Link href='/Formal' legacyBehavior><a className="mr-5 hover:text-gray-900">Formal</a></Link>
      <Link href='/Sneaker' legacyBehavior><a className="mr-5 hover:text-gray-900">Sneaker</a></Link>
      <Link href='/Sport' legacyBehavior><a className="mr-5 hover:text-gray-900">Sport</a></Link>
      <Link href='/Slipers' legacyBehavior><a className="mr-5 hover:text-gray-900">Slipers</a></Link>
    </nav>
    <Link href={'/login'}><button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
     
    </button></Link>

  </div>
</header>
    </div>
  )
}

export default Navbar

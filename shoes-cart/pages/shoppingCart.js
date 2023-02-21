import React from 'react'
import Link from 'next/link'
import product from '../models/product'


const ShoppingCart = ({isOpen,setIsOpen,cart,addToCart,removeFromCart,clearCart,subTotal,product}) => {
  
console.log(cart,addToCart,removeFromCart,clearCart,subTotal)
  
  
  
  return (
    <div>
      <nav>
    <div className={isOpen?"sidebar collapse":'relative z-10'} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  
  <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
       
        <div className="pointer-events-auto w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                <div className="ml-3 flex h-7 items-center">
                  <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => setIsOpen(true)}>
                  <span className="sr-only" >Close panel</span>
               

<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
                   
                    
                 
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {Object.keys(cart).length===0 && <div className='mt-5 my-5 text-red-600'><p>😢 😢Sorry your cart is empty!</p></div>}
                  {Object.keys(cart).map((k)=>{
                    return(
                      <li className="flex py-6" key={k}>
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img src={cart[k].img} alt="eccomerce" className="h-full w-full object-cover object-center"/>
                        </div>
  
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href="#">{cart[k].name}</a>
                              </h3>
                              <p className="ml-4">Price:{cart[k].price}</p>
                             
                            </div>
                            
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">Qty:({cart[k].qty})</p>
                           
                            <div className="flex">
                              <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}>Remove</button>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                     
                     
                    
                    

                   

                  
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>{subTotal}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <Link href={'/Checkout'} legacyBehavior>
                <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a></Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
               
                  <button type="button" className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" onClick={clearCart}>
                    Clear Cart
                   
                  </button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </nav>
      
    </div>
  )
}

export default ShoppingCart

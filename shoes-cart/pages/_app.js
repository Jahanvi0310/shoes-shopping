import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'

function MyApp({ Component, pageProps }) {
  const[cart,setCart]=useState({})
  const[subTotal,setSubtotal]=useState(0)
  const [user,setUser]=useState({value:null})
  const[key,setKey]=useState(0)
  const [progress, setProgress] = useState(0)
const router=useRouter();
  useEffect(()=>{
    router.events.on('routeChangeComplete',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeStart',()=>{
      setProgress(100)
    })

try{
  if(localStorage.getItem("cart")){
    setCart(JSON.parse(localStorage.getItem("cart")))
    saveCart(JSON.parse(localStorage.getItem("cart")))
  }
}
catch(error){
  console.error(error)
  localStorage.clear();
}
const token=localStorage.getItem("token")
if(token){
  setUser({value:token})
  setKey(Math.random())
}
  },[router.query])
  const saveCart=(mycart)=>{
    localStorage.setItem("cart",JSON.stringify(mycart))
    let subT=0;
    let keys=Object.keys(mycart)
    
    for(let i=0;i<keys.length;i++){
      
      subT +=mycart[keys[i]]["price"] * mycart[keys[i]].qty;
    }
    setSubtotal(subT) 
  }
  const addToCart=(itemCode,qty,price,name,size,variant)=>{
let newCart=cart;

if(itemCode in cart){
newCart[itemCode].qty=cart[itemCode].qty+qty
}
else{
  newCart[itemCode]={qty:1,price,size,name,variant}
}
setCart(newCart)
saveCart(newCart)
}
const clearCart=()=>{
setCart({})
saveCart({})

}
const removeFromCart=(itemCode,qty,price,name,size,variant)=>{
  let newCart=cart;
  
  if(itemCode in cart){
    newCart[itemCode].qty=cart[itemCode].qty-qty
  }
  if(newCart[itemCode]["qty"]<=0){
delete newCart[itemCode]
  }
  setCart(newCart)
  saveCart(newCart)
}
const buyNow=(itemCode,qty,price,name,size,variant)=>{
  let newCart=cart;

if(itemCode in cart){
newCart[itemCode].qty=cart[itemCode].qty+qty
}
else{
  newCart[itemCode]={qty:1,price,size,name,variant}
}
setCart(newCart)
saveCart(newCart)
router.push('/Checkout')
}
const logOut=()=>{
  localStorage.removeItem("token")
  setKey(Math.random)
  setUser({value:null})
}
  return <> 
  <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
  < Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} key={key} user={user} logOut={logOut}/>
  <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}  clearCart={clearCart} subTotal={subTotal} {...pageProps} buyNow={buyNow}/>
  <Footer/>
  </>
}

export default MyApp

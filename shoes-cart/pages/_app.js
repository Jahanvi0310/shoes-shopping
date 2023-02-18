import '../styles/globals.css'
import Footer from '../Components/footer'
import Navbar from '../Components/Navbar'
import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const [user,setUser]=useState({value:null})
  const[key,setKey]=useState(0)
  const router=useRouter();
  useEffect(()=>{
    const token=localStorage.getItem("token")
    if(token){
      setUser({value:token})
      setKey(Math.random())
    }
      },[router.query])
  
      const logOut=()=>{
        console.log("helle")
        localStorage.removeItem("token")
        setKey(Math.random)
        setUser({value:null})
        console.log("helle")
        Router.push('/Login')
      }
  return(
  <>
  <Navbar key={key} user={user} logOut={logOut}/>
  <Component {...pageProps} />
  
  <Footer/>
  </>)
  
 
}

export default MyApp


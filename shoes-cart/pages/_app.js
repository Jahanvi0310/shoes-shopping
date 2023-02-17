import '../styles/globals.css'
import Footer from '../Components/footer'
import Navbar from '../Components/Navbar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
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
        localStorage.removeItem("token")
        setKey(Math.random)
        setUser({value:null})
      }
  return(
  <>
  <Navbar key={key} user={user} logOut={logOut}/>
  <Component {...pageProps} />
  
  <Footer/>
  </>)
  
 
}

export default MyApp


import Link from 'next/Link'
import React from 'react'
import Product from "../models/product";
import mongoose from "mongoose";
import { useTrail, animated } from 'react-spring';
import { motion } from 'framer-motion';
const Sliper = ({products}) => {
  console.log(products);
  const trail = useTrail(Object.keys(products).length, {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 },
    config: { mass: 1, tension: 100, friction: 20 },
  });
  return (
    <>
    
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center ">
          {trail.map((props,index)=>{
              const item = Object.values(products)[index];
              return(
<animated.div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl m-8  "key={item._id} style={props}>
                    <Link passHref={true} href={`/Product/${item.slug}`}>
                    <a className="block relative rounded overflow-hidden">
                    <motion.div
                    className="h-64 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                      <motion.img
                        alt="ecommerce"
                       src={item.img}  
                       initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}                    className="m-auto h-[30vh] md:h-[36vh] block "
                        
                      />
                      </motion.div>
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                       {item.title}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.desc}
                      </h2>
                      <p className="mt-1">₹{item.price}</p>
                    
                      <div className="mt-1">
                        {item.size.includes("10") && <span className="border border-gray-300 mx-1 px-1">10</span>}
                        {item.size.includes("9") && <span className="border border-gray-300 mx-1 px-1">9</span>}
                        {item.size.includes("8") && <span className="border border-gray-300 mx-1 px-1">8</span>}
                        {item.size.includes("7") && <span className="border border-gray-300 mx-1 px-1">7</span>}
                        </div>
                        <div className="mt-1">
                        {item.color.includes("red") && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {item.color.includes("pink") && <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {item.color.includes("blue") && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {item.color.includes("brown") && <button className="border-2 border-gray-300 ml-1 bg-amber-800 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {item.color.includes("black") && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                        </div>
                     
                      
                  </div>
                  </Link>
            </animated.div>
              )
            })}
          
            
            
            
            
            
            
            


      </div>
</div>
    </section>
    </>
     
  );
};


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState)
    await mongoose.connect(process.env.MONGO_URI);
  let products = await Product.find({ category: "sliper" });
  let sliper={};
  for (let item of products)
    if (item.title in sliper) {
      if (
        !sliper[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        sliper[item.title].color.push(item.color);
      }
      if (
        !sliper[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        sliper[item.title].size.push(item.size);
      }
    } else {
      sliper[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        sliper[item.title].color = [item.color];
        sliper[item.title].size = [item.size];
      }
    }

  return{
    props:{products:JSON.parse(JSON.stringify(sliper))}
  }
}
export default Sliper
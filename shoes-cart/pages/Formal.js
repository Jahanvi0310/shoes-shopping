import Link from 'next/Link'
import React from 'react'
import Product from "../models/product";
import mongoose from "mongoose";

const Formal = ({products}) => {
  console.log(products);
  return (
    <>
    
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center ">
            {Object.keys(products).map((item)=>{
              return(
<div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl m-8  "key={products[item]._id}>
                    <Link passHref={true} href={`/Product/${products[item].slug}`}>
                    <a className="block relative rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                       src={products[item].img}                      className="m-auto h-[30vh] md:h-[36vh] block "
                        
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                       {products[item].title}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                      {products[item].desc}
                      </h2>
                      <p className="mt-1">₹{products[item].price}</p>
                    
                      <div className="mt-1">
                        {products[item].size.includes("10") && <span className="border border-gray-300 mx-1 px-1">10</span>}
                        {products[item].size.includes("9") && <span className="border border-gray-300 mx-1 px-1">9</span>}
                        {products[item].size.includes("8") && <span className="border border-gray-300 mx-1 px-1">8</span>}
                        {products[item].size.includes("7") && <span className="border border-gray-300 mx-1 px-1">7</span>}
                        </div>
                        <div className="mt-1">
                        {products[item].color.includes("red") && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {products[item].color.includes("pink") && <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {products[item].color.includes("blue") && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {products[item].color.includes("brown") && <button className="border-2 border-gray-300 ml-1 bg-amber-800 rounded-full w-6 h-6 focus:outline-none"></button>}
                        {products[item].color.includes("black") && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                        </div>
                     
                      
                  </div>
                  </Link>
            </div>
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
  let products = await Product.find({ category: "Formal" });
  let Formal={};
  for (let item of products)
    if (item.title in Formal) {
      if (
        !Formal[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        Formal[item.title].color.push(item.color);
      }
      if (
        !Formal[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        Formal[item.title].size.push(item.size);
      }
    } else {
      Formal[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        Formal[item.title].color = [item.color];
        Formal[item.title].size = [item.size];
      }
    }

  return{
    props:{products:JSON.parse(JSON.stringify(Formal))}
  }
}
export default Formal
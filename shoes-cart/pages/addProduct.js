import React from 'react';
import { useState } from 'react';
import {toast,ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
const AddProductForm = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [availableQty, setAvailableQty] = useState('');

  const handleSubmit = async(e) => {
    
    e.preventDefault();
    if(title==''&&slug==''&&category==''&&desc==''&&img==''&&size==''&&price==''&&color==''&&availableQty==''){
        toast.error('Enter the details!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            console.log('clicked')
    }
    else{
        const data={title,slug,category,desc,img,size,price,color,availableQty}
        let res= await fetch('http://localhost:3000/api/addproduct', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response=await res.json()
     console.log(response)
    setTitle('');
    setSlug('');
    setSize('');
    setPrice('');
    setImg('');
    setDesc('');
    setColor('');
    setCategory('');
    setAvailableQty('');
    if(response.success){
        toast.success('product added', {
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
        toast.error('Product already added!!!', {
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
    }
    // Handle form submission
  };

  return (
    <>
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
<div className=" max-w-md mx-auto ">

      <h1 className="text-2xl font-bold text-gray-800 mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="slug">
            Slug
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="slug"
            type="text"
            placeholder="Enter slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="desc">
            Description
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="desc"
            placeholder="Enter description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="img">
            Image
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="img"
            type="text"
            placeholder="Enter image URL"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="size">
            Size
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="size"
            type="number"
            placeholder="Enter Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
           Price
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            placeholder="Enter Price of product"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="color">
          Color
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="color"
            type="text"
            placeholder="Enter color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="img">
           availableQty
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="availableQty"
            type="number"
            placeholder="Enter Quantity"
            value={availableQty}
            onChange={(e) => setAvailableQty(e.target.value)}
          />
        </div>
        <div className="mb-4">
          
         <button
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-sky-500"
           
          >Add Product</button>
        </div>
        </form>
        </div>
        </>
  )
}
export default AddProductForm;
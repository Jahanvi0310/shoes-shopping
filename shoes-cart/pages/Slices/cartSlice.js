import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState={
    cartItems:[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
}
const cartSlice=createSlice({
name:'cart',
initialState,
reducers:{
    addToCart(state,action){
        console.log(action.payload._id)
     const itemIndex =  state.cartItems.findIndex((item)=>item._id===action.payload._id);
     if(itemIndex >= 0){
        state.cartItems[itemIndex].cartQuantity +=1;
        toast.info("increased product quantity", {
            position: "bottom-center",
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
        const tempProduct={...action.payload, cartQuantity: 1};
        state.cartItems.push(tempProduct);
        toast.success("item added to cart", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
     }
    //  localStorage.setItem('cartItems',JSON.stringify(state.cartItems));
       
    },
}
})
export const {addToCart}=cartSlice.actions;
export default cartSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './pages/Reducers/cartReducer'
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  });
  
export default store
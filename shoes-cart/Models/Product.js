const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  size: { type: String },
  price: { type: Number, required: true },
  color: { type: String },
  availableQty: { type: Number, default: 0 },
  
},{timestamps:true});
mongoose.models={}
export default mongoose.model("products",productSchema);
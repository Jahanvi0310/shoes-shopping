import Product from "../../models/Product";
import connectDb from "../../Middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { title, slug,category, img, desc,size, price, color, availableQty, } = req.body;

      const product = new Product({
        title,
        slug,
        category,
        img,
        desc,
        size,
        price,
        color,
        availableQty
       
      });

      const savedProduct = await product.save();

      res.status(201).json({
        success: true,
        message: "Product created successfully",
        product: savedProduct
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(400).json({ error: "This is not a valid request" });
  }
};

export default connectDb(handler);

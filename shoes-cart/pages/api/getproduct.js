import Product from "../../models/Product";
import connectDb from "../../Middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const products = await Product.find({});

      res.status(200).json({
        success: true,
        message: "Products retrieved successfully",
        products: products
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

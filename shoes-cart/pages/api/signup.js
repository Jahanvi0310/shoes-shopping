import User from "../../models/User"
import connectDb from "../../Middleware/mongoose"
var CryptoJS = require("crypto-js");
const handler=async(req,res)=>{
   if(req.method=="POST"){
        console.log(req.body)
        const {name,email}=req.body
        let user=await User.findOne({email:req.body.email})
        console.log('user',user)
        if (!user) {
            // create new user and save to the database
            const encryptedPassword = CryptoJS.AES.encrypt(req.body.password, 'secret123').toString();
            const u = new User({ name, email, password: encryptedPassword });
            await u.save();
            res.status(200).json({ success: "Success" });
          } else {
            // user already exists
            res.status(400).json({ error: "User already exists" });
          }
          
}
    else{
        res.status(400).json({error:"This is not a valid request"})
    }

}
    

export default connectDb(handler);
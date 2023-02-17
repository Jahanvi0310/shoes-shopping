import User from "../../Models/User"
import connectDb from "../../Middleware/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
const handler=async(req,res)=>{
   
    if(req.method=="POST"){
        let user=await User.findOne({email:req.body.email})
        console.log(user)
        const bytes=CryptoJS.AES.decrypt(user.password, 'secret123');
        let decryptpass=bytes.toString(CryptoJS.enc.Utf8);

        if(user){
       if(req.body.email==user.email && req.body.password==decryptpass){
        var token = jwt.sign({email:user.email,name:user.name}, 'jwtsecret',{
            expiresIn:"2d"
        });
        res.status(200).json({success:true,token})
       }
       else{
       res.status(200).json({success:false,error:"Sorry Wrong credentials!!"})
       }    
    }

        else{
            res.status(200).json({success:false,error:"No user found!!"})
        }
       
}
    else{
        res.status(400).json({error:"This is not a valid request"})
    }

}
    

export default connectDb(handler);
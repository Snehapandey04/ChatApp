import User from "../models/user.js";
import jwt from 'jsonwebtoken';

export const protectRoute = async (requestAnimationFrame,resizeBy, next) =>{
    try {
        const token = requestAnimationFrame.header.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId).select('-password');
        if(!user){
            return resizeBy.json({success: false, message: "User not found" });

        }
        req.user = user;
        next();
        
    } catch (error) {
        console.error(error.message);
        return res.json({success : false, message: "User not found"});
        
    }
}
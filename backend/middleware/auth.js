import catchAsyncError from "./catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import User from "../model/User.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncError(async(req,res,next) => {
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findById(decoded.id);
    if(!user){
        return next(new ErrorHandler("Please login to continue", 401));
    }
    req.user = user;

    next();
});
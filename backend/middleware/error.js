import ErrorHandler from "../utils/ErrorHandler.js";

export default (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

//     wrong mongodb error
    if(err.name === "CastError"){
        const message = `Resource not found with this id: invalid ${err.path}`;
        new ErrorHandler(message, 400)
    }
    if (err.code === 11000){
        const message = `Duplicate key ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message, 400)
    }
    // wrong jwt token
    if (err.name === "JsonWebTokenError"){
        const message = "Invalid token";
        err = new ErrorHandler(message, 400)
    }
    if (err.name === "TokenExpiredError"){
        const message = "Token expired";
        err = new ErrorHandler(message, 400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}
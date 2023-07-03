// const express = require('express')

import express from 'express'
import {configDotenv} from "dotenv";
import ErrorHandler from "./middleware/error.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./controller/UserController.js"
import cors from "cors";
//configure env
if (process.env.NODE_ENV !== "production") {
    configDotenv({
        path: "backend/config/.env"
    })
}
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", express.static('uploads'))
app.use(cors({
        origin: process.env.FRONTEND_BASE_URL,
        credentials: true
    }
));


app.use("/api/v1/user", userRouter)

// error handlers
app.use(ErrorHandler)
export default app;
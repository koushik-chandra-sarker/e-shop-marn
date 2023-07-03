import mongoose from "mongoose";
const connectDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data)=>{
        console.log('Database connected with ' + data.connection.host)
    }).catch((error) => console.error("MongoDB connection failed:", error.message))
}

export default connectDatabase;
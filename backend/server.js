
import app from "./app.js";
import connectDatabase from "./db/connection.js";
process.on('uncaughtException', (err) => {
    console.log(err);
    console.log("Stopped the server for uncaught exception")
})

// database connection
connectDatabase()

const server = app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Listening on port ${process.env.PORT}`);
})

process.on('unhandledRejection', (err) => {
    console.log(err);
    console.log("Stopped the server for unhandled rejection");

    server.close(() => {
        process.exit(1)
    })
})

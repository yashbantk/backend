

import dotenv from "dotenv";
import mongoose from "mongoose";
import connectdb from "../db/index.js";




dotenv.config({
    path: './env'
})


connectdb()










// import express from "express"

// ( async()=> {
//     try{
//     mongoose.connect(`${process.env.MOONGODB_URL}/${DB_NAME}`)
//     application.on("error",(error) => {
//         console.log("err:",error);
//     })
//     application.listen(process.env.PORT,() => {
//         console.log(`app is listening on the port ${process.env.PORT}`);
//     })
//     }catch(error){
//         console.error("error:",error)
//     }
// })()
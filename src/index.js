// require('dotenv').config({path: './env'})
// import dotenv from "dotenv";
import connectDB from "./db/index.js"

// dotenv.config({
//   path: './env'
// })

connectDB();













/*
import express from "express";
const app = express();
( async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_NAME}`)
    app.on("error", (error)=>{
      console.log("ERRR: ", error);
      throw error
    })

    app.listen(process.env.PORT, ()=>{
      console.log(`App is listening on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR: ", error)
    throw error
  }
})()

// This is first approach and this not a good approach coz we just made the index.js file very hotchpotch. That's why in the 2nd approach we will create a new file in db folder and we will import that file in the file.....

*/
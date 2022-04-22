require("dotenv").config();
import express, { Application, Request, Response, NextFunction } from 'express';
const mongoose = require("mongoose");
const app:Application = express();

const PORT = process.env.PORT || 5001;
const DB_URL = process.env.DB_URL;



app.get('/', (req: Request, res: Response) => {
  res.send("Hello TS!")
})




// connect to DB then run express server
mongoose.connect(DB_URL,{ useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`🚀  Server running on port: ${PORT} ...`)))
    .catch((error:Error)=>console.log(error.message))

// replaced by the above combined code
// mongoose.connect(DB_URL, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Connected to database");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);  
// })
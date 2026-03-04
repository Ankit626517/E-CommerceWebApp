require("dotenv").config();
const productRoutes = require("./routes/productRoutes");
const express = require("express");

const connectDB = require("./Config/db");

const app = express()
const port = 2100;


// Connect DB
connectDB();

app.get('/', (req , res )=>{
    res.send("Hello i am running")
} )

app.use("/api", productRoutes);

app.listen(port , ()=>{
    console.log("Server is running.........")
})
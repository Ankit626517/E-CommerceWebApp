require("dotenv").config();
const productRoutes = require("./routes/productRoutes");
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const connectDB = require("./Config/db");
// require("dotenv").config();
const app = express()
const port = 2100;


// Connect DB
connectDB();

app.get('/', (req , res )=>{
    res.send("Hello i am running")
} );

// userlogin singup

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// userlogin singup

app.use("/api", productRoutes);

app.listen(port , ()=>{
    console.log("Server is running.........")
})
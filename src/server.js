require ("./db/connection");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;//check for correct port or use 5001
const userRouter = require("./user/routes");
const User = require("./user/model");


app.use(express.json());
app.use(cors());
app.use(userRouter);
console.log("server working");

app.listen(port, async ()=>{
    await User.sync({alter:true})
    console.log(`App is listening on ${port}`);
})
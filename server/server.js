const express = require('express');
const cors = require('cors');
require ("dotenv").config({path: "./config/.env"});
const app = express();
require("./config/db");

app.use(cors());
app.use(express.json())

app.use('/api' , require("./routes/routes"))

app.get("/",(res,req)=>{
    res.send("OUR API");
})
port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`Server Running : ${port}`);
});
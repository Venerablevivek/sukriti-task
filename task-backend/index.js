require("dotenv").config();
const express = require('express');
const app = express();
const dbConnect = require("./Database/database.js");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRoutes = require("./routes/authRoute.js");
const UserActionRoutes = require("./routes/UserRoute.js");

const PORT = process.env.PORT || 5000;

// middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: true,
        credentials: true,
    })
)

app.use("/api/v1/auth",UserRoutes);
app.use("/api/v1/users",UserActionRoutes);

app.get('/', (req,res)=>{
    res.send('Hey, I am Backend Server Route');
})

app.listen(PORT, ()=>{
    dbConnect();
    console.log(`Server Started at Port ${PORT}`);
})
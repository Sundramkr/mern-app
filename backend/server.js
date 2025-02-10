const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
app.get('/favicon.ico', (req, res) => res.status(204).end());


const cors = require('cors');

app.use(cors());

const userRoute = require("./routes/userRoute");


app.use(express.json());

mongoose
    .connect(process.env.URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT || 8000 , (err)=>{
            if(err) console.log(err);
            console.log("running sucessfully at", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log("error",error);
    });

app.use(userRoute);
// app.use('/api', userRoute);


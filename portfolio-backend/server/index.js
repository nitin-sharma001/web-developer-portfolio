

const express = require("express");
const User = require("./models/User");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/userData", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("DB connected successfully")})
.catch( (err) => {
    console.log("DB CONNECTION ISSUES");
    console.error(err);
    process.exit(1);
} );



app.post("/post", async(req, res) => {


    const {name, email, message} = req.body;

    const formData = new User(
        {
            name : name,
            email : email,
            message : message
        }
);


    try{
        console.log("I m  upper insert,js");
        

        await formData.save();

        

        console.log("Data inserted ... ");
        res.json({
            success : true, 
            message : "Data inserted successfully",
        });

    }catch(e){


        res.json({
            success : false, 
            message : "Data inserted error",
        });


    }

})






app.listen(4000, () => {
    console.log("App listen at Port 8000");
})
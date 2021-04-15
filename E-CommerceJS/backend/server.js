// const express = require("express") //get access to  express backage 1
// const cors = require("cors")//this for cors issue 2
// const data = require("./data.js")  //to get info from data file  1

// instead of require we will use import ES6 3
import express from "express"
import cors from "cors"
import data from "./data.js"
import mongoose from "mongoose"
import config from "./config.js"
import userRouter from "./userRouter/userRoute.js"
import bodyParser from "body-parser"



mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.log("connected to mangoo db")

    }).catch((error) => {
        console.log(error.reason)
    })
const app = express(); //express function and that function returns an object 1
//which is our vib app
app.use(cors())//this  also for cors but we make it after app bcouse app is const 2

//for sign-in to be able to read the body section
// in the sign-in app. use should be before app.use for user router
app.use(bodyParser.json())

app.use('/api/users', userRouter)
// app.use(express.json());
//get is http request -to do the new route -put the link and the second parameter1
app.get('/api/products', (req, res) => {
    console.log(data.products)
    res.send(data.products)

})
//add new router 4 for each product 4
//req.params.id its exactly the id :id in the request
//if it dosent exist we will make const for the statement and declare variable 
//that we will use in the if  condition
app.get("/api/products/:id", (req, res) => {

    const product = data.products.find((ele) => ele.id === req.params.id)
    // console.log("####", req)
    // console.log("####", req.params)
    // console.log("####", req.params.id)
    if (product) {
        // console.log(product)
        res.send(product);
    } else {
        // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        // console.log("******", res)


        res.status(404).send({ message: "product not found" })

    }
})
// http://localhost:5000/api/products/:id
//sign-in 
app.use((err, req, res, next) => {
    const status = err.name && err.name == "validationError" ? 400 : 500
    res.status(status).send({ message: err.message })
})
//this to make it run 1
app.listen(5000, () => {
    console.log("server at http://localhost:5000")
})

//finally you have to go to backage.json on the root folder and add to "scripts"
//("start":"node backend/server.js") 1
//to deal with corse error we will add "npm install cors " to the rootbackage 
// 1 create backend
// 2 create cors policy after http request
// 3 use ES6

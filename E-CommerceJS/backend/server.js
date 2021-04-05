// const express = require("express") //get access to  express backage 1
// const cors = require("cors")//this for cors issue 2
// const data = require("./data.js")  //to get info from data file  1

// instead of require we will use import ES6 3
import express from "express"
import cors from "cors"
import data from "./data.js"

const app = express(); //express function and that function returns an object 1
//which is our vib app
app.use(cors())//this  also for cors but we make it after app bcouse app is const 2

//get is http request -to do the new route -put the link and the second parameter1
app.get('/api/products', (req, res) => {
    res.send(data.products)
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

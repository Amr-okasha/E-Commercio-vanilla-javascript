const express = require("express") //get access to  express backage
const cors = require("cors")//this for cors issue 
const data = require("./data.js")  //to get info from data file 
const app = express(); //express function and that function returns an object 
//which is our vib app
app.use(cors())//this  also for cors but we make it after app bcouse app is const 

//get is http request -to do the new route -put the link and the second parameter 
app.get('/api/products', (req, res) => {
    res.send(data.products)
})

//this to make it run
app.listen(5000, () => {
    console.log("server at http://localhost:5000")
})

//finally you have to go to backage.json on the root folder and add to "scripts"
//"start":"node backend/server.js"
//to deal with corse error we will add "npm install cors " to the rootbackage 
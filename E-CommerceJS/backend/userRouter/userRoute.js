import express from 'express'
import User from '../models/userModels';
import expressAsyncHandler from 'express-async-handler';
//  wrong syntax import expressAsyncHandler from "expressAsyncHandler"
import { generateToken, isAuth } from '../utils';

const userRouter = express.Router()
userRouter.get('/createadmin', expressAsyncHandler(async (req, res) => {
    try {
        const user = new User({
            name: 'admin',
            email: 'admin@example.com',
            password: 'furniturehome',
            isAdmin: true,

        });
        const createdUser = await user.save();
        res.send(createdUser);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
})
);
//send request to database to get data for this email and password
userRouter.post("/signin", expressAsyncHandler(async (req, res) => {
    //get access to user model from mongoose call find one is object like filter
    const signinUser = await User.findOne({
        //to send to front end data that have sent in http request get in frontend req.body
        //filter email and password that that have sent before
        //we need body parser to be able to read body part of the request
        //npm install body-parser its middle ware by express
        //by have this we can read the content of the body sectoin of the request
        //in the top we gonna import bodyParser from "body-parser" in server.js  
        //we will add in server.js app.use(bodyParser.json()) ot be able
        // to read it as json format
        //we need to test the in valid user and password in neg-scenario
        //for test we will download postman from postman.com
        //install express asyn handler if there error in our application
        //which in handle error stop our application and not send back
        //correct message to the user
        //npm install express-async-handler
        //imprt that in the user handler
        //(import expressAsyncHandler from "expressAsyncHandler")
        //wrap expressAsyncHandler to post and get request in userRoute.js
        //in server.js write after the app.listen write
        //app.use((err,req,res,next)=>{
        //     const status =err.name&&err.name=="validationError"?400:500
        // })
        //if 400 it means user write something wrong if 500 means error at server
        //res.status(status).send(message:err.message)
        //generate json web token
        //npm install jsonwebtoken
        //by using jsonwebtoken we can create token based on user invoke and use it 
        //for authenticate request
        //for the else part if the login request exist
        //create utils.js in the backend 
        //import jwt from "jsonwebtoken"
        //import config from "./config"
        //export const generateToken=(user)=>{
        //return jwt.sign({
        //     _id,user.id,
        //     name:user.name,
        //     email:user.email,
        //     isAdmin:user.isAdmin
        //     },config.JWT_SECRET)
        // }
        //config.JWT_SECRET is a second parameter for prevent hackers
        //we will define config.JWT_SECRET in config.js to get put it in the .env
        //JWT_SECRET=somethingsecret is the master key to encrypt token should be in safe place
        //import generate token to userRoute.js
        email: req.body.email,
        password: req.body.password,
    })
    //check-on user first neg-scinario if sign-in user isnt exist
    if (!signinUser) {
        res.status(404).send({
            message: "Invalid Email or Password"
        })
    } else {
        res.send({
            _id: signinUser._id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            //token:generateToken(signinUser)
            //generate token based on the data of user
            token: generateToken(signinUser)
        })
    }
})
);


//dublicate userRouter for sign in and change it to register
userRouter.post("/register", expressAsyncHandler(async (req, res) => {

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    const CreatedUser = user.save()
    if (!CreatedUser) {
        res.status(404).send({
            message: "Invalid User Data"
        })
    } else {
        res.send({
            _id: CreatedUser._id,
            name: CreatedUser.name,
            email: CreatedUser.email,
            isAdmin: CreatedUser.isAdmin,

            token: generateToken(CreatedUser)
        })
    }
})
);


userRouter.put("/:id", isAuth, expressAsyncHandler(async (req, res) => {
    //in put method we will get user from data base
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(404).send({
            message: "User NOT Found"
        })
    } else {
        // req.body.name get the name from request
        //user.name or get it from data base
        user.name = req.body.name || user.name
        user.eamail = req.body.eamail || user.eamail
        user.password = req.body.password || user.password
        const updateUser = await user.save()
        res.send({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,

            token: generateToken(updateUser)
        })
    }
})
);

export default userRouter;


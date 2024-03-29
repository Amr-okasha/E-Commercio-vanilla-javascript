import jwt from "jsonwebtoken"
import config from "./config"
export const generateToken = (user) => {
    return jwt.sign({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }, config.JWT_SECRET)
}

export const isAuth = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
        res.status(401).send("Token is not supplied")
    } else {
        const token = bearerToken.slice(7, bearerToken.length)
        jwt.verify(token, config.JWT_SECRET, (err, data) => {
            // data represent the coded token
            //and the decoded like email password etc
            if (err) {
                res.status(401).send({ message: "invalid Token" })
            } else {
                req.user = data;
                //next() means every thing is ok and the next handler should start
                //proccessing the request
                next()
            }

        })

    }
}
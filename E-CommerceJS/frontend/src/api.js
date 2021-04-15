

import axios from "axios"
import { apiUrl } from "./config"

export const getProduct = async (baseUrl) => {
    try {
        const response = await axios({
            //to didnt repeat the url more and more get it from api config
            url: baseUrl,
            method: "GET",
            header: {
                "Content-Type": "application/json",
            }
        })
        // console.log(response.data.message)
        // its important if the request is correct  but dosnt work
        if (response.statusText !== "OK") {
            throw new Error(response.data.message)
        }
        return response.data
    } catch (err) {
        // console.log(err)
        return { error: err.response.data.message || err.message }
    }
}


export const signin = async ({ email, password }) => {
    try {
        const response = await axios({
            url: `${apiUrl}/api/users/signin`,
            method: "POST",
            headers: {
                "Content-Type": "application/Json"
            },
            data: {
                email,
                password,
            }
        })
        if (response.statusText !== "OK") {
            throw new Error(resopons.data.message)
        }
        return response.data
    } catch (err) {
        console.log(err)
        return { error: err.response.data.message || err.message }

    }

}
//after create this http request we will emplement this to the back end
// go to the server .js and create step num 4
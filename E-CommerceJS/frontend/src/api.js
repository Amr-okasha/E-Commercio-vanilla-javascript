
import { apiUrl } from "./config"
import axios from "axios"

export const getProduct = async (id) => {
    try {
        const response = await axios({
            //to didnt repeat the url more and more get it from api config
            url: id,
            method: "GET",
            header: {
                "Content-Type": "application/json",
            }
        })
        if (response.statusText !== "OK") {
            throw new Error(response.data.message)
        }
        return response.data
    } catch (err) {
        console.log(err)
        return { error: err.message }
    }
}
//after create this http request we will emplement this to the back end
// go to the server .js and create step num 4
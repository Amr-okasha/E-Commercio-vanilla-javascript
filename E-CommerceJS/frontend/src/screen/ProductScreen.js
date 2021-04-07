import parseRequestUrl from "../utils.js"
import { getProduct } from "../api.js"
import { apiUrl } from "../config"
const ProductScreen = {
    render: async () => {
        //     return `<div>ProductScreen</div>` its trial till we start make products screen
        const request = parseRequestUrl()
        const baseUrl = `${apiUrl}/api/products/${request.id}`
        const product = await getProduct(baseUrl)
        console.log(product.error)
        if (product.error) {
            return (`<div>${product.error}<div>`)
        }
        // to get getProduct(request.id)   inside src folder we will create
        //api.js to define  function that get api products
        //after make the back end we will render here
        return `<h1>${product.name1}</h1>`

    }
}
export default ProductScreen









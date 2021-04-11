import { getProduct } from "../api.js"
import { apiUrl } from "../config.js";
import { getCartItems, setCartItems } from "../localSorage.js";
import parsrRequestURL from "../utils.js"
//addToCart for local storage
const addToCart = (items, forceUpdate = false) => {

    let cartItems = getCartItems()
    // console.log(cartItems, "cartItems")
    console.log(items, "itemmmmmmmmmmmmm")
    // 1console.log(items.product, "item.product")
    // console.log(items.name, "item.nameeeeeeeeeeee")
    const existItem = cartItems.find((x) => {
        console.log(x)

        return x.product === items.product
    })

    if (existItem) {
        cartItems = cartItems.map(x =>
            x.product === existItem.product ? items : x

        )

    } else {
        cartItems = [...cartItems, items]
    }
    setCartItems(cartItems)


}
const CartScreen = {

    render: async () => {
        const request = parsrRequestURL()
        //create if condition asks about id exist?so its the product card :main cart
        if (request.id) {
            const baseUrl = `${apiUrl}/api/products/${request.id}`;
            const product = await getProduct(baseUrl)
            console.log(product, "proooooooooooooooo")

            addToCart({
                product: product.id,
                name: product.name1,
                image: product.image,
                price: product.price,
                countInStock: product.countInStock,
                qty: 1

            })

        }

        return `<div>Cart Screen</div>
        <div>${getCartItems().length}</div>
        `
    },

}
export default CartScreen
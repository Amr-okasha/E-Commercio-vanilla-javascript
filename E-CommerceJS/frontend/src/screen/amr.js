import { getProduct } from "../api.js"
import { apiUrl } from "../config.js";
import { getCartItems, setCartItems } from "../localSorage.js";
import parsrRequestURL from "../utils.js"

// the problem that the render result which come from add to cart
// didnt read because they arenot the same scope 
//addToCart for local storage
const addToCart = (item, forceUpdate = false) => {
    // console.log(item.product, "item.product")
    // let cartItems = []
    let cartItems = getCartItems()
    // cartItems = [...cartRepo]
    // console.log(cartRepo, "cartRepooooo")
    // console.log(cartItems, "cartItems")
    // console.log(item, "itemmmmmmmmmmmmm")
    // 1console.log(item.product, "item.product")
    // console.log(item.name, "item.nameeeeeeeeeeee")
    const existItem = cartItems.find((x) => {
        // console.log(x, "xxxxxxxxxxxxxxxxxxx")
        x.product == item.product
        // console.log(x.product, "x.product")
        // console.log(item.product, "item.product")

    })


    if (existItem) {
        cartItems = cartItems.map(x =>
            x.product === existItem.product ? item : x

        )

    } else {
        cartItems = [...cartItems, item]
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
        <div>${addToCart().length}</div>
        `
    },

}
export default CartScreen
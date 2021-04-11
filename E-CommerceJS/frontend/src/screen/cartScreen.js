import { getProduct } from "../api.js"
import { apiUrl } from "../config.js";
import { getCartItems, setCartItems } from "../localSorage.js";
import { rerender } from "../utils.js";
import parsrRequestURL from "../utils.js"
//addToCart for local storage
const addToCart = (items, forceUpdate = false) => {

    let cartItems = getCartItems()
    // console.log(cartItems, "cartItems")
    // console.log(items, "itemmmmmmmmmmmmm")
    // 1console.log(items.product, "item.product")
    // console.log(items.name, "item.nameeeeeeeeeeee")
    const existItem = cartItems.find((x) => {
        // console.log(x)

        return x.product === items.product
    })

    if (existItem) {
        if (forceUpdate) {
            cartItems = cartItems.map(x =>
                x.product === existItem.product ? items : x

            )
        }
    } else {
        cartItems = [...cartItems, items]
    }
    setCartItems(cartItems)
    if (forceUpdate) { rerender(CartScreen) }
};
const removeFromCart = (id) => {
    setCartItems(getCartItems().filter(x => x.product !== id))
    if (id === parsrRequestURL().id) {
        console.log(parsrRequestURL().id, "parsrRequestURL().id")
        document.location.hash = "/cart"
    } else {
        console.log(parsrRequestURL().id, "parsrRequestURL().id")
        rerender(CartScreen)
    }
}
const CartScreen = {
    after_render: () => {
        const qtySelects = document.getElementsByClassName("qty-select")
        Array.from(qtySelects).forEach(qtySelect => {
            qtySelect.addEventListener("change", (e) => {
                const item = getCartItems().find(x => x.product === qtySelect.id)
                addToCart({ ...item, qty: Number(e.target.value) }, true)
            })
        });
        const deleteButtons = document.getElementsByClassName("delete-button")
        Array.from(deleteButtons).forEach(deleteButton => {
            deleteButton.addEventListener("click", (e) => {
                removeFromCart(deleteButton.id)
            })
        })
        const proceedChekOut = document.getElementById("proceed-to-checkout")
        proceedChekOut.addEventListener("click", () => {
            document.location.hash = "/dignin"
        })
    },
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
        const cartItems = getCartItems()
        return `<div class="cart">
        <div class="cart-list">
            <ul class="cart-list-container">
                <li>
                    <h3>Sopping Cart</h3>
                    <div>Price</div>
                </li>
                ${cartItems.length === 0 ?
                `<div>No cart Item Added <a href="/#/">Go For Shopping</a></div>` :
                cartItems.map(item =>
                    `
                <li>
                    <div class="cart-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                  
                    <div class="cart-name">
                        <div>
                            <a href="/#/product/${item.product}">
                            ${item.name}
                            </a>
                        </div>
                        <div id=qty class="qty">
                        <div>
                            Qty: <select id="${item.product}" class="qty-select">
                            ${[...Array(item.countInStock).keys()].map(x =>
                        item.qty === x + 1

                            ?
                            `<option selected value="${x + 1}">${x + 1}</option>`
                            :
                            `<option  value="${x + 1}">${x + 1}</option>`

                    )}
                            </select >
                            </div >
    <div>
        <button type="button" id="${item.product}" class=delete-button>Delete</button>
    </div>
                            </div >
                    
                    </div >
    <div class=cart-price>
        $${item.price}
    </div>
                </li >
    `
                ).join('\n')
            }
            </ul>
        </div>
        <div class="cart-action">
           <h3>Sub-Total <hr>(${cartItems.reduce((a, c) => a + c.qty, 0)} :Items):
            ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}$
            
            </h3>
           <button id="proceed-to-checkout" class="fw">
               Proceed To Check-Out
           </button>
        `
    },

}
export default CartScreen
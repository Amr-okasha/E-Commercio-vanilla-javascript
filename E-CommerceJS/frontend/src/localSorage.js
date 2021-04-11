//implement cart items if there is no caritem should return empty Array
export const getCartItems = () => {
    const cartItems = localStorage.getItem("cartItems") ?
        JSON.parse(localStorage.getItem("cartItems"))
        : [];
    console.log(cartItems, "lololololooo")
    return cartItems

}
export const setCartItems = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}


//implement cart items if there is no caritem should return empty Array
export const getCartItems = () => {
    const cartItems = localStorage.getItem("cartItems") ?
        JSON.parse(localStorage.getItem("cartItems"))
        : [];

    return cartItems

}
export const setCartItems = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}


export const getUserInfo = () => {
    return localStorage.getItem("userInfo") ?
        JSON.parse(localStorage.getItem("userInfo")) :
        { name: "", email: "", password: "" }
}


export const setUserInfo = ({
    _id = "",
    name = "",
    email = "",
    password = "",
    token = "",
    isAdmin = false
}) => {
    localStorage.setItem("userInfo", JSON.stringify({
        _id,
        name,
        email,
        password,
        token,
        isAdmin,
    }))
}

export const clearUser = () => {
    localStorage.removeItem("userInfo")
}

export const getShipping = () => {
    const shipping = localStorage.getItem('shipping') ? JSON.parse(localStorage.getItem("shipping")) :
        {
            address: '',
            city: '',
            postalCode: '',
            country: ''
        }
    return shipping
}
export const setShipping = ({
    address = '',
    city = '',
    postalCode = '',
    country = '',
}) => {
    localStorage.setItem('shipping', JSON.stringify({ address, city, postalCode, country })
    )

}

export const getPayment = () => {
    const payment = localStorage.getItem('payment') ? JSON.parse(localStorage.getItem("payment")) :
        {
            Paymentmethod: "paypal"
        }
    return payment
}
export const setPayment = ({
    Paymentmethod = "paypal"
}) => {
    localStorage.setItem('payment', JSON.stringify({ Paymentmethod })
    )

}
export const cleanCart = () => {
    localStorage.removeItem("cartItem")
}
import CartScreen from "./screen/cartScreen.js"
import Error404Screen from "./screen/Error404Screen.js"
import HomeScreen from "./screen/HomeScreen.js"
import LoginScreen from "./screen/LoginScreen.js"
import ProductScreen from "./screen/ProductScreen.js"
import parsrRequestURL from "./utils.js"

const routes = {
    "/": HomeScreen,
    "/product/:id": ProductScreen,
    "/cart/:id": CartScreen,
    "/cart": CartScreen,
    "/signin": LoginScreen,
}

const router = async () => {
    "use strict"
    const request = parsrRequestURL()
    // console.log(request.resource, "request.resource")
    // console.log(request.id, "request.id")
    // console.log(request.action, "request.action")
    const parseURL = (request.resource ? `/${request.resource}` : `/`) +
        (request.id ? "/:id" : "") + (request.action ? `/${request.action}` : "")
    // console.log(parseURL, "parseURL")
    const screen = routes[parseURL] ? routes[parseURL] : Error404Screen;
    console.log(screen, "screen")
    const main = document.getElementById("main-container")
    // main.innerHTML = HomeScreen.render() insted of this we will put
    main.innerHTML = await screen.render();
    // console.log(main.innerHTML, "main.innerHTML")
    if (screen.after_render()) { await screen.after_render() }

}

window.addEventListener("load", router)
window.addEventListener("hashchange", router)
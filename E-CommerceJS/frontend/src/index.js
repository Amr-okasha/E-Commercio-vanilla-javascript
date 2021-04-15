import CartScreen from "./screen/cartScreen.js"
import Error404Screen from "./screen/Error404Screen.js"
import HomeScreen from "./screen/HomeScreen.js"
import LoginScreen from "./screen/LoginScreen.js"
import ProductScreen from "./screen/ProductScreen.js"
import parsrRequestURL, { hideLoading, showLoading } from "./utils.js"
import Header from "./components/header.js"

const routes = {
    "/": HomeScreen,
    "/product/:id": ProductScreen,
    "/cart/:id": CartScreen,
    "/cart": CartScreen,
    "/signin": LoginScreen,
}

const router = async () => {
    "use strict"
    showLoading()
    const request = parsrRequestURL()
    // console.log(request.resource, "request.resource")
    // console.log(request.id, "request.id")
    // console.log(request.action, "request.action")
    const parseURL = (request.resource ? `/${request.resource}` : `/`) +
        (request.id ? "/:id" : "") + (request.action ? `/${request.action}` : "")
    // console.log(parseURL, "parseURL")
    const screen = routes[parseURL] ? routes[parseURL] : Error404Screen;
    console.log(screen, "screen")
    //header 3 statments
    const header = document.getElementById("main-header")
    header.innerHTML = await Header.render();
    await Header.after_render()
    //main 3 statments
    const main = document.getElementById("main-container")
    // main.innerHTML = HomeScreen.render() insted of this we will put
    main.innerHTML = await screen.render();
    // console.log(main.innerHTML, "main.innerHTML")
    if (screen.after_render()) { await screen.after_render() }
    hideLoading()

}

window.addEventListener("load", router)
window.addEventListener("hashchange", router)
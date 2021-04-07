import Error404Screen from "./screen/Error404Screen.js"
import HomeScreen from "./screen/HomeScreen.js"
import ProductScreen from "./screen/ProductScreen.js"
import parsrRequestURL from "./utils.js"

const routes = {
    "/": HomeScreen,
    "/product/:id": ProductScreen
}

const router = async () => {
    const request = parsrRequestURL()
    console.log(request.resource)
    console.log(request.id)
    console.log(request.action)
    const parseURL = (request.resource ? `/${request.resource}` : `/`) +
        (request.id ? "/:id" : "") + (request.action ? `/${request.action}` : "")
    const screen = routes[parseURL] ? routes[parseURL] : Error404Screen;
    const main = document.getElementById("main-container")
    // main.innerHTML = HomeScreen.render() insted of this we will put
    main.innerHTML = await screen.render()
}
router()
window.addEventListener("load", router)
window.addEventListener("hashchange", router)
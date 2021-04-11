const parsrRequestURL = () => {
    const url = document.location.hash.toLowerCase();
    // console.log(url, "url")
    const request = url.split("/");
    // console.log(request)
    return {
        resource: request[1],
        id: request[2],
        action: request[3]
    }

}
export default parsrRequestURL
export const rerender = async (component) => {
    document.getElementById("main-container").innerHTML = await component.render();
    await component.after_render()
}
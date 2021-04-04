export const parsrRequestURL = () => {
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
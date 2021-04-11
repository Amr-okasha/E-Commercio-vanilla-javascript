import parsrRequestURL from "../utils.js";
import { getProduct } from "../api.js";
import { apiUrl } from "../config";
import Rating from "../components/Rating.js";

const ProductScreen = {
    //we can use this method after_render instead of 
    //anchor tag i the diplay-render of the single product
    //to add-button cart
    after_render: () => {
        document.getElementById("add-button").addEventListener("click", () => {
            const request = parsrRequestURL()
            document.location.hash = `/cart/${request.id}`

        })
    },
    render: async () => {
        //     return `<div>ProductScreen</div>` its trial till we start make products screen
        const request = parsrRequestURL();
        const baseUrl = `${apiUrl}/api/products/${request.id}`;
        const product = await getProduct(baseUrl);
        // console.log(product.error);
        if (product.error) {
            return `<div>${product.error}<div>`;
        }
        // to get getProduct(request.id)   inside src folder we will create
        //api.js to define  function that get api products
        //after make the back end we will render here
        return `
        <div class="content">
        <div class="back-to-result ">
        <a href="/#/" class=mc>Back To Result</a>
        </div>
        <div class="details">
        <div class="details-image">
        <img src='${product.image}'alt='${product.name1}'>
        </div>
        <div class="details-info">
        <ul>
        <li><h1>${product.name1}<h2></li>
        <li>${Rating.render({
            value: product.rating,
            text: `${product.numberReviews} Reviews`,
        })}</li>
        <li>Price <strong>$${product.price}</strong></li>
        <li>Description
        <div>${product.description}</div>
        </li>
        </ul>
        </div>
        <div class=details-action>
        <ul>
        <li>
        Price : $${product.price}
        </li>
        <li>
        status:
        ${product.countInStock > 0
                ? `<span class=success >In Stock</span>`
                : `<span class="error">Un Availabale</span>`}
        </li>
        <li>
        
        <button class=" fw primary" id="add-button">Add to cart </button>
     
        </li>
        </ul>
        </div>
        </div>
        </div>`;
    },
};
export default ProductScreen;

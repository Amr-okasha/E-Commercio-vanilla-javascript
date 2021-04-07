import parseRequestUrl from "../utils.js";
import { getProduct } from "../api.js";
import { apiUrl } from "../config";
import Rating from "../components/Rating.js";
const ProductScreen = {
    render: async () => {
        //     return `<div>ProductScreen</div>` its trial till we start make products screen
        const request = parseRequestUrl();
        const baseUrl = `${apiUrl}/api/products/${request.id}`;
        const product = await getProduct(baseUrl);
        console.log(product.error);
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
        <li >
        <button class=" fw primary">Add to cart </button>
        </li>
        </ul>
        </div>
        </div>
        </div>`;
    },
};
export default ProductScreen;

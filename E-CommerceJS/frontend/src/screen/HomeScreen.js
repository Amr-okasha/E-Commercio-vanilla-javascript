// import data from "../javascript/data.js" the backend instead of this
import axios from 'axios';
import Rating from '../components/Rating';
import { getProduct } from "../api.js"
import { apiUrl } from "../config"
const HomeScreen = {
    render: async () => {
        //  const { products } = data this has commented becouse the backend is created
        //instead of the last statement we will make fetch api

        const baseUrl = `${apiUrl}/api/products`
        console.log(baseUrl)
        const product1 = await getProduct(baseUrl)
        //make api.js that control all apis after create product screen axios method
        // const response = await axios({
        //     url: "http://localhost:5000/api/products",
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        // if (!response || response.statusText !== "OK") {

        //     return `<div>Error in getting data</div>`
        // }
        const products = product1;
        console.log(products)
        return `
        <ul class="products">
        ${products.map(product => `
        <li>
        <section class="product">
                        <a href="/#/product/${product.id}">
                            <img src="${product.image}" alt="${product.name1}">
                        </a>
                        <div class="product-name">
                            <a href="/#/product/1"> ${product.name1} </a>
                        </div>
                        <div class="product-rating-ah">
                        ${Rating.render({ value: product.rating, text: `${product.numberReviews} reviews` })}
                        </div>
                        <div class="product-brand">
                            <p>${product.brand}</p>
                        </div>
                        <div class=product-price>
                            <p>price <span>$${product.price}</span></p>
                        </div>
                    </section>
        </li>
        `).join('\n')}
        `
    }
}
export default HomeScreen